import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-pokemon-modal',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss']
})
export class PokemonModalComponent {
  @Input() pokemon: any;
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
    console.log('Pokemon data:', this.pokemon);
  }

  closeModal() {
    this.close.emit();
  }
}
