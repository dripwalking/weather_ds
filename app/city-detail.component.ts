import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from './city';
import { CityService } from './city.service';

@Component({
  selector: 'city-detail',
  template: `
  <ol class="breadcrumb">
  <li><a href="/">home</a></li>
  <li class="active">{{city.name}}</li>
  </ol>
    <div class="col-sm-10">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">Weather in {{city.name}}</h3>
      </div>
      <div class="panel-body">
        <div class="col-sm-5">

        <br/>
        <img src="http://openweathermap.org/img/w/{{city.ico}}.png">
        <span class="temper">{{city.t_cur}} °C</span>
        <br/>
        {{city.desc}}
        <br/>
        <i>{{city.fdesc}}</i>
        </div>
        <div class="col-sm-7">

        <br/>
        <table class="table table-striped">
          <tr>
          <td>pressure:</td>
          <td>{{city.pressure}} hpa</td>
          </tr>
          <tr>
          <td>humidity:</td>
          <td>{{city.humidity}} %</td>
          </tr>
          <tr>
          <td>temp max:</td>
          <td>{{city.t_max}} °C</td>
          </tr>
          <tr>
          <td>temp min:</td>
          <td>{{city.t_min}} °C</td>
          </tr>

        </table>

        </div>

       </div>
    </div>
    </div>

    `,
    providers: [CityService]
})
//noinspection TypeScriptValidateTypes
export class CityDetailComponent implements OnInit {

  //city: City;

  public city: City[] = [];


  constructor(
    private route: ActivatedRoute,
    private cityService: CityService) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.cityService.getCity(id).then(value => this.city = value);



    });
  }




}
