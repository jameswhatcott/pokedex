import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../service/poke.service';
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

  constructor(private pokeService: PokeService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && this.name) {
      this.pokeService.getPokemon(this.name).subscribe(data => {
        this.pokemon = data;
      });
    }
  }
}