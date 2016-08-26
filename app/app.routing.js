"use strict";
var router_1 = require('@angular/router');
var cities_component_1 = require('./cities.component');
var city_detail_component_1 = require('./city-detail.component');
var _404_component_1 = require('./404.component');
var edit_component_1 = require('./edit.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/cities',
        pathMatch: 'full'
    },
    {
        path: 'edit',
        component: edit_component_1.EditComponent
    },
    {
        path: 'cities',
        component: cities_component_1.CitiesComponent
    },
    {
        path: 'cities/:id',
        component: city_detail_component_1.CityDetailComponent
    },
    {
        path: '**',
        component: _404_component_1.PageNotFoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map