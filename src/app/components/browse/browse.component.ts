import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../service/poke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokeService: PokeService) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.pokeService.getAllPokemon().subscribe(response => {
      const results = response.results.slice(0, 10); // Limit to 10 Pokémon for display
      results.forEach((result: any) => {
        this.pokeService.getPokemon(result.name).subscribe(pokemonData => {
          this.pokemons.push({
            name: pokemonData.name,
            imageUrl: pokemonData.sprites.front_default
          });
        });
      });
    });
  }

  showDetails(pokemon: any) {
    // Logic to show modal with Pokémon details
    console.log(pokemon);
  }


}
