"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var city_service_1 = require('./city.service');
var EditComponent = (function () {
    function EditComponent(cityService, http) {
        this.cityService = cityService;
        this.http = http;
        this.weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=e38dc8f90fe7de73575de0eecacbbd91&units=metric&q='; // URL to web api
    }
    EditComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (cities) { return _this.cities = cities; });
    };
    EditComponent.prototype.ngOnInit = function () {
        this.getCities();
    };
    EditComponent.prototype.addCity = function (newCity) {
        if (newCity) {
            newCity = newCity.charAt(0).toUpperCase() + newCity.slice(1);
            console.log(newCity);
            console.log(JSON.parse(localStorage.getItem('cities_js')));
            console.log('start getting data');
            var mn_cities = JSON.parse(localStorage.getItem('cities_js'));
            var cur_city = {};
            this.http.get(this.weatherUrl + newCity)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
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
            }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        }
    };
    EditComponent.prototype.delCity = function (newCity) {
        if (newCity) {
            console.log(newCity);
            console.log(JSON.parse(localStorage.getItem('cities_js')));
            console.log('start deleting data');
            var mn_cities = JSON.parse(localStorage.getItem('cities_js'));
            for (var i = 0; i < mn_cities.length; i++) {
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
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'cities-detail',
            template: "\n  <ol class=\"breadcrumb\">\n  <li><a href=\"/\">home</a></li>\n  <li class=\"active\">edit cities</li>\n  </ol>\n  <p *ngFor=\"let city of cities\">\n  {{city.name}} - <a (click)=delCity(city.name)>del</a>\n  </p>\n  <hr/>\n\n  <input #newCity\n      (keyup.enter)=\"addCity(newCity.value)\"\n      (blur)=\"addCity(newCity.value); newCity.value='' \">\n\n    <button (click)=addCity(newCity.value)>Add</button>\n\n\n\n    ",
            providers: [city_service_1.CityService]
        }), 
        __metadata('design:paramtypes', [city_service_1.CityService, http_1.Http])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map