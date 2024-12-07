import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; // Fetch all Pokémon

  constructor(private http: HttpClient) { }

  // Fetch all Pokémon names
  getAllPokemon(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Fetch details for a specific Pokémon
  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  }
}
