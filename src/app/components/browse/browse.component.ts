import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../service/poke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  pokemons: any[] = [];
  paginatedPokemons: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 30;
  totalPages: number = 1;

  constructor(private pokeService: PokeService) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.pokeService.getAllPokemon().subscribe(response => {
      const pokemonDetailsRequests = response.results.map((result: any) =>
        this.pokeService.getPokemon(result.name).toPromise()
      );

      Promise.all(pokemonDetailsRequests).then(pokemonDetails => {
        this.pokemons = pokemonDetails.map((pokemon: any) => ({
          name: pokemon.name,
          image: pokemon.sprites?.front_default || 'https://via.placeholder.com/150',
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
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedPokemons();
    }
  }

  showDetails(pokemon: any) {
    // Logic to show modal with Pokémon details
    console.log(pokemon);
  }
}