import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../service/poke/poke.service';
import { SharedModule } from '../../shared/shared.module'; // Adjust the path as necessary

@Component({
  selector: 'app-poke-results',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './poke-results.component.html',
  styleUrls: ['./poke-results.component.scss']
})
export class PokeResultsComponent implements OnChanges {
  @Input() name: string = '';
  pokemon: any;

  playCry() {
    const cryUrl = `${this.pokemon.cries.latest}`; // Adjust the path as needed
    const audio = new Audio(cryUrl);
    audio.play();
  }


  constructor(private pokeService: PokeService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && this.name) {
      const searchName = this.name.toLowerCase();
      this.pokeService.getPokemon(searchName).subscribe(data => {
        this.pokemon = data;
        console.log(data);
      });
    }
  }
}