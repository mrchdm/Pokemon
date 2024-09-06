
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../../domain/pokemon';
import { PokemonsService } from '../../../../services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonsListComponent implements OnInit{
  public pokemons: Pokemon[]=[]

  constructor(private readonly pokemonsService: PokemonsService){}
  public ngOnInit(): void {

    this.pokemons = this.pokemonsService.getPokemons();
  
  }
public loadMore(): void{
  console.log('load more');
  
}

public catchPokemon(pokemon: Pokemon): void {
  this.pokemonsService.catchPokemon(pokemon)
  console.log(this.pokemonsService.getMyPokemons());
  
}
}
