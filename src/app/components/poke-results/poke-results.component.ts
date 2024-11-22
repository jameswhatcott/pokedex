import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../service/poke.service';

@Component({
  selector: 'app-poke-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-results.component.html',
  styleUrls: ['./poke-results.component.scss']
})
export class PokeResultsComponent implements OnInit {
  pokemon: any;

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokeService.getPokemon('pikachu').subscribe(data => {
      this.pokemon = data;
    });
  }
}