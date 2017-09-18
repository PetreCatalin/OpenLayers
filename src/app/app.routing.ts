import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DrawComponent } from './components/draw/draw.component';
import { MovearoundComponent } from './components/movearound/movearound.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CountriesComponent } from './components/countries/countries.component';
import { LocationComponent } from './components/location/location.component';
import { GraticuleComponent } from './components/graticule/graticule.component';
import { LayergroupsComponent } from './components/layergroups/layergroups.component';

const appRoutes: Routes = [
    {
        path:'draw',
        component: DrawComponent
    },
    {
        path:'movearound',
        component: MovearoundComponent
    },
    {
        path:'cities',
        component: CitiesComponent
    },
    {
        path:'countries',
        component: CountriesComponent
    },
    {
        path:'location',
        component: LocationComponent
    },
    {
        path:'graticule',
        component: GraticuleComponent
    },
    {
        path:'layergroups',
        component:LayergroupsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);