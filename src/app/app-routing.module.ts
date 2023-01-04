import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullComponent } from './layouts/full/full.component';
import { PackagesComponent } from './packages/packages.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: FullComponent },
  {
    path: 'projects',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/projects/search-movies',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./material-component/material.module').then(
            (m) => m.MaterialComponentsModule
          ), // route guard implementation.
      },
      {
        path: 'packages',
        loadChildren: () =>
          import('./packages/packages.module').then((m) => m.PackagesModule),
      },
      {
        path: 'search-movies',
        component: SearchMoviesComponent,
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
