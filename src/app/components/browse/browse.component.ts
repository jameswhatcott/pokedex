import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../service/poke/poke.service';
import { CommonModule } from '@angular/common';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, PokemonModalComponent, SharedModule],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  pokemons: any[] = [];
  paginatedPokemons: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 30;
  totalPages: number = 1;
  selectedPokemon: any = null;
  isLoading: boolean = false;

  constructor(private pokeService: PokeService) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.isLoading = true; // Set loading state
    this.pokeService.getAllPokemon().subscribe(response => {
      const pokemonDetailsRequests = response.results.map((result: any) =>
        this.pokeService.getPokemon(result.name).toPromise()
      );
      this.isLoading = false; // Reset loading state
      Promise.all(pokemonDetailsRequests).then(pokemonDetails => {
        this.pokemons = pokemonDetails.map((pokemon: any) => ({
          name: pokemon.name,
          image: pokemon.sprites?.front_default || 'https://via.placeholder.com/150',
          types: pokemon.types.map((type: any) => ({ type: { name: type.type.name } })), // Ensure correct structure
          abilities: pokemon.abilities.map((ability: any) => ({ ability: { name: ability.ability.name } })) // Ensure correct structure
        }));
        this.totalPages = Math.ceil(this.pokemons.length / this.itemsPerPage);
        this.updatePaginatedPokemons();
      });
    });
  }

  updatePaginatedPokemons() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPokemons = this.pokemons.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedPokemons();
      this.scrollToTop();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedPokemons();
      this.scrollToTop();
    }
  }

  showDetails(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  closeModal() {
    this.selectedPokemon = null;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}