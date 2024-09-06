import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon, PokemonCard } from '../../../../domain/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  @Input() public pokemon: PokemonCard = {} as PokemonCard;
  @Output() public catch: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  public get isCaught(): boolean {
    return !!this.pokemon.date;
  }

  public catchPokemon(): void {
    this.catch.emit(this.pokemon);
  }
}
