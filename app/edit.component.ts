import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'cities-detail',
  template: `
  <ol class="breadcrumb">
  <li><a href="/">home</a></li>
  <li class="active">edit cities</li>
  </ol>
  <p *ngFor="let city of cities">
  {{city.name}} - <a (click)=delCity(city.name)>del</a>
  </p>
  <hr/>

  <input #newCity
      (keyup.enter)="addCity(newCity.value)"
      (blur)="addCity(newCity.value); newCity.value='' ">

    <button (click)=addCity(newCity.value)>Add</button>



    `,
    providers: [CityService]
})
//noinspection TypeScriptValidateTypes
export class EditComponent implements OnInit {
  cities: City[];
  private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=e38dc8f90fe7de73575de0eecacbbd91&units=metric&q=';  // URL to web api


  constructor(private cityService: CityService, private http: Http) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }
  ngOnInit(): void {
    this.getCities();
  }


  addCity(newCity: string) {
    if (newCity) {
      newCity = newCity.charAt(0).toUpperCase() + newCity.slice(1);
      console.log(newCity);
      console.log(JSON.parse(localStorage.getItem('cities_js')));
      console.log('start getting data');

      var mn_cities = JSON.parse(localStorage.getItem('cities_js'));
      var cur_city = {};

      this.http.get(this.weatherUrl + newCity)
        .map((res:Response) => res.json())
        .subscribe(
          data => {
            //console.log(data);
            cur_city["id"] = data.id;
            cur_city["name"] = data.name;
            cur_city["ico"] = data.weather[0].icon;
            cur_city["t_cur"] = data.main.temp;
            cur_city["desc"] = data.weather[0].main;
            cur_city["fdesc"] = data.weather[0].description;
            cur_city["pressure"] = data.main.pressure;
            cur_city["humidity"] = data.main.humidity;
            cur_city["t_min"] = data.main.temp_min;
            cur_city["t_max"] = data.main.temp_max;
            cur_city["t_mor"] = '';
            cur_city["t_day"] = '';
            cur_city["t_ev"] = '';
            mn_cities.push(cur_city);

            localStorage.setItem('cities_js', JSON.stringify(mn_cities));
            //this.cities.push(cur_city);

          },
          err => console.error(err),
          () => console.log('done')
        );

        //location.reload();

    }

  }

  delCity(newCity: string) {
    if (newCity) {
      console.log(newCity);
      console.log(JSON.parse(localStorage.getItem('cities_js')));
      console.log('start deleting data');

      var mn_cities = JSON.parse(localStorage.getItem('cities_js'));

      for(var i = 0; i < mn_cities.length; i++) {
          var obj = mn_cities[i];
          if (obj.name == newCity) {
            console.log('find');
            mn_cities.splice(i, 1);
          }
        }
        localStorage.setItem('cities_js', JSON.stringify(mn_cities));
        console.log(mn_cities);
        location.reload();
    }
  }


}
