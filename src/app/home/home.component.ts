import { Component } from '@angular/core';
import { PokeSearchComponent } from '../components/poke-search/poke-search.component';
import { PokeResultsComponent } from '../components/poke-results/poke-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeSearchComponent, PokeResultsComponent],
  template: `
  <h1>Welcome to the Pokedex</h1>
    <app-poke-search (searchEvent)="onSearch($event)"></app-poke-search>
    <app-poke-results [name]="name"></app-poke-results>
  `,
  styles: []
})
export class HomeComponent {
  name: string = '';

  onSearch(name: string): void {
    this.name = name;
  }
}