import { Routes } from '@angular/router';
import { BrowseComponent } from '../components/browse/browse.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('../home/home.component').then(m => m.HomeComponent),
  },
  { 
    path: 'browse', 
    pathMatch: 'full',
    loadComponent: () => import('../components/browse/browse.component').then(m => m.BrowseComponent),
  },
  {
    path: 'login', component: LoginComponent
  }
];