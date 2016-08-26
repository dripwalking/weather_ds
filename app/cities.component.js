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
var city_service_1 = require('./city.service');
var CitiesComponent = (function () {
    function CitiesComponent(cityService) {
        this.cityService = cityService;
    }
    CitiesComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().then(function (cities) { return _this.cities = cities; });
    };
    CitiesComponent.prototype.ngOnInit = function () {
        this.getCities();
    };
    CitiesComponent = __decorate([
        core_1.Component({
            selector: 'cities-detail',
            template: "\n  <ol class=\"breadcrumb\">\n  <li class=\"active\">home</li>\n  </ol>\n    <div class=\"col-sm-3\" *ngFor=\"let city of cities\">\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Weather in <a routerLink=\"/cities/{{city.id}}/\">{{city.name}}</a> </h3>\n        </div>\n        <div class=\"panel-body\">\n        <img src=\"http://openweathermap.org/img/w/{{city.ico}}.png\" style=\"height:40px\">\n        {{city.t_cur}} \u00B0C\n        <br/>\n        {{city.desc}}\n        <br/><br/>\n        <p><a routerLink=\"/cities/{{city.id}}/\">get full forecast >>></a></p>\n         </div>\n      </div>\n    </div>\n    <div class=\"col-sm-10\"><a routerLink=\"/edit\">edit cities</a></div>\n\n    ",
            providers: [city_service_1.CityService]
        }), 
        __metadata('design:paramtypes', [city_service_1.CityService])
    ], CitiesComponent);
    return CitiesComponent;
}());
exports.CitiesComponent = CitiesComponent;
//# sourceMappingURL=cities.component.js.map