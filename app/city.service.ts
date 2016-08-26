import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { City } from './city';
import { CITIES } from './city-data';

@Injectable()
export class CityService {


  private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=e38dc8f90fe7de73575de0eecacbbd91&units=metric&q=';  // URL to web api
  //private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=e38dc8f90fe7de73575de0eecacbbd91&units=metric&q=Moscow';  // URL to web api

  constructor(private http: Http) { }

  getCities(): Promise<City[]> {

    if (JSON.parse(localStorage.getItem('cities_js'))) {
      console.log('data exist');
    } else {
      console.log('start getting data');

      var mn_cities = [];
      var cur_city = {};

      for(var i = 0; i < CITIES.length; i++) {
          var obj = CITIES[i];
          console.log(obj.id + obj.name);

          this.http.get(this.weatherUrl + obj.name)
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
                cur_city = {};
                localStorage.setItem('cities_js', JSON.stringify(mn_cities));
              },
              err => console.error(err),
              () => console.log('done')
            );

      }
      location.reload();

    }

    console.log(JSON.parse(localStorage.getItem('cities_js')));

    return Promise.resolve(JSON.parse(localStorage.getItem('cities_js')));
  }

  getCity(id: number): Promise<City> {

    var st = JSON.parse(localStorage.getItem('cities_js'));
    console.log(id);
    for (var i = 0; i < st.length; i++){

      if (st[i]["id"] == id) {
        console.log(st[i]);
        //return st[i];
        return Promise.resolve(st[i]);
      }
    }

    //return this.getCities()
    //           .then(cities => cities.find(city => city.id === id));
  }


}
