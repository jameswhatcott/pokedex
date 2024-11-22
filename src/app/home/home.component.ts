import { Component } from '@angular/core';
import { PokeResultsComponent } from "../components/poke-results/poke-results.component";
import { PokeSearchComponent } from '../components/poke-search/poke-search.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, PokeResultsComponent, PokeSearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
