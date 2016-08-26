import { Routes, RouterModule } from '@angular/router';


import { CitiesComponent }  from './cities.component';
import { CityDetailComponent }  from './city-detail.component';
import { PageNotFoundComponent }  from './404.component';
import { EditComponent }  from './edit.component';

const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/cities',
  pathMatch: 'full'
},
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'cities/:id',
    component: CityDetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
   }
];

export const routing = RouterModule.forRoot(appRoutes);
