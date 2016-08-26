import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { FormsModule }    from '@angular/forms';
import {enableProdMode} from '@angular/core';

import { routing }        from './app.routing';
import { AppComponent }  from './app.component';
import { CitiesComponent }  from './cities.component';
import { CityDetailComponent }  from './city-detail.component';
import { PageNotFoundComponent }  from './404.component';
import { EditComponent }  from './edit.component';

@NgModule({
  imports:      [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    PageNotFoundComponent,
    EditComponent
  ],
  //noinspection TypeScriptValidateTypes
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
