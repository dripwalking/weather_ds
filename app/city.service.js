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
var city_data_1 = require('./city-data');
var CityService = (function () {
    //private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=e38dc8f90fe7de73575de0eecacbbd91&units=metric&q=Moscow';  // URL to web api
    function CityService(http) {
        this.http = http;
        this.weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=e38dc8f90fe7de73575de0eecacbbd91&units=metric&q='; // URL to web api
    }
    CityService.prototype.getCities = function () {
        if (JSON.parse(localStorage.getItem('cities_js'))) {
            console.log('data exist');
        }
        else {
            console.log('start getting data');
            var mn_cities = [];
            var cur_city = {};
            for (var i = 0; i < city_data_1.CITIES.length; i++) {
                var obj = city_data_1.CITIES[i];
                console.log(obj.id + obj.name);
                this.http.get(this.weatherUrl + obj.name)
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
                    cur_city = {};
                    localStorage.setItem('cities_js', JSON.stringify(mn_cities));
                }, function (err) { return console.error(err); }, function () { return console.log('done'); });
            }
            location.reload();
        }
        console.log(JSON.parse(localStorage.getItem('cities_js')));
        return Promise.resolve(JSON.parse(localStorage.getItem('cities_js')));
    };
    CityService.prototype.getCity = function (id) {
        var st = JSON.parse(localStorage.getItem('cities_js'));
        console.log(id);
        for (var i = 0; i < st.length; i++) {
            if (st[i]["id"] == id) {
                console.log(st[i]);
                //return st[i];
                return Promise.resolve(st[i]);
            }
        }
        //return this.getCities()
        //           .then(cities => cities.find(city => city.id === id));
    };
    CityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CityService);
    return CityService;
}());
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map