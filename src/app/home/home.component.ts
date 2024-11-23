import { Component } from '@angular/core';
import { PokeResultsComponent } from '../components/poke-results/poke-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeResultsComponent],
  template: `
    <app-poke-results></app-poke-results>
  `,
  styles: []
})
export class HomeComponent { }