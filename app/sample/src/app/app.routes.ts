import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DetailComponent } from './details/details';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    title: 'Home details',
  },
];
