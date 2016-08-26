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
var router_1 = require('@angular/router');
var city_service_1 = require('./city.service');
var CityDetailComponent = (function () {
    function CityDetailComponent(route, cityService) {
        this.route = route;
        this.cityService = cityService;
        //city: City;
        this.city = [];
    }
    CityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.cityService.getCity(id).then(function (value) { return _this.city = value; });
        });
    };
    CityDetailComponent = __decorate([
        core_1.Component({
            selector: 'city-detail',
            template: "\n  <ol class=\"breadcrumb\">\n  <li><a href=\"/\">home</a></li>\n  <li class=\"active\">{{city.name}}</li>\n  </ol>\n    <div class=\"col-sm-10\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Weather in {{city.name}}</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"col-sm-5\">\n\n        <br/>\n        <img src=\"http://openweathermap.org/img/w/{{city.ico}}.png\">\n        <span class=\"temper\">{{city.t_cur}} \u00B0C</span>\n        <br/>\n        {{city.desc}}\n        <br/>\n        <i>{{city.fdesc}}</i>\n        </div>\n        <div class=\"col-sm-7\">\n\n        <br/>\n        <table class=\"table table-striped\">\n          <tr>\n          <td>pressure:</td>\n          <td>{{city.pressure}} hpa</td>\n          </tr>\n          <tr>\n          <td>humidity:</td>\n          <td>{{city.humidity}} %</td>\n          </tr>\n          <tr>\n          <td>temp max:</td>\n          <td>{{city.t_max}} \u00B0C</td>\n          </tr>\n          <tr>\n          <td>temp min:</td>\n          <td>{{city.t_min}} \u00B0C</td>\n          </tr>\n\n        </table>\n\n        </div>\n\n       </div>\n    </div>\n    </div>\n\n    ",
            providers: [city_service_1.CityService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, city_service_1.CityService])
    ], CityDetailComponent);
    return CityDetailComponent;
}());
exports.CityDetailComponent = CityDetailComponent;
//# sourceMappingURL=city-detail.component.js.map