import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-poke-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
  name: string = '';
  suggestions: string[] = [];
  @Output() searchEvent = new EventEmitter<string>();

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; // Fetch all Pokémon names

  constructor(private http: HttpClient) {}

  // Fetch suggestions when the user types
  onInput(): void {
    if (!this.name.trim()) {
      this.suggestions = [];
      return;
    }

    this.http.get<any>(this.apiUrl).subscribe((data) => {
      this.suggestions = data.results
        .map((pokemon: any) => pokemon.name)
        .filter((pokemonName: string) =>
          pokemonName.toLowerCase().startsWith(this.name.toLowerCase())
        )
        .slice(0, 10); // Limit to top 10 suggestions
    });
  }

  // Select a suggestion
  selectSuggestion(suggestion: string): void {
    this.name = suggestion;
    this.suggestions = [];
    this.search();
  }

  // Emit the search event
  search(): void {
    this.searchEvent.emit(this.name);
  }
}
