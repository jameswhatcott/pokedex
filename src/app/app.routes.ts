import { Routes } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  { 
    path: 'browse', 
    pathMatch: 'full',
    loadComponent: () => import('./components/browse/browse.component').then(m => m.BrowseComponent),
  },
];