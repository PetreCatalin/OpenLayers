import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DrawComponent } from './components/draw/draw.component';
import { MovearoundComponent } from './components/movearound/movearound.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CountriesComponent } from './components/countries/countries.component';
import { LocationComponent } from './components/location/location.component';
import { GraticuleComponent } from './components/graticule/graticule.component';
import { LayergroupsComponent } from './components/layergroups/layergroups.component';

import { AppComponent }  from './app.component';

import { CitiesService } from './services/cities.service';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,
                  routing,
                  HttpModule ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  DrawComponent,
                  MovearoundComponent,
                  CitiesComponent,
                  CountriesComponent,
                  LocationComponent,
                  GraticuleComponent,
                  LayergroupsComponent],
  providers : [ CitiesService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
