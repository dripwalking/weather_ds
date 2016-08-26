import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'cities-detail',
  template: `
  <ol class="breadcrumb">
  <li class="active">home</li>
  </ol>
    <div class="col-sm-3" *ngFor="let city of cities">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">Weather in <a routerLink="/cities/{{city.id}}/">{{city.name}}</a> </h3>
        </div>
        <div class="panel-body">
        <img src="http://openweathermap.org/img/w/{{city.ico}}.png" style="height:40px">
        {{city.t_cur}} °C
        <br/>
        {{city.desc}}
        <br/><br/>
        <p><a routerLink="/cities/{{city.id}}/">get full forecast >>></a></p>
         </div>
      </div>
    </div>
    <div class="col-sm-10"><a routerLink="/edit">edit cities</a></div>

    `,
    providers: [CityService]
})
export class CitiesComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService) { }

  getCities(): void {
    this.cityService.getCities().then(cities => this.cities = cities);
  }
  ngOnInit(): void {
    this.getCities();
  }


}
