import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokeService } from '../../service/poke/poke.service'; // Import PokeService

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

  constructor(private pokeService: PokeService) {} // Inject PokeService

  // Fetch suggestions when the user types
  onInput(): void {
    if (!this.name.trim()) {
      this.suggestions = [];
      return;
    }

    this.pokeService.getAllPokemon().subscribe((data) => {
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

  // Emit the search event and fetch Pokémon details
  search(): void {
    this.pokeService.getPokemon(this.name).subscribe((pokemon) => {
      console.log(pokemon); // Handle the Pokémon details as needed
      this.searchEvent.emit(this.name);
    });
  }
}