import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MyPokemon } from '../../../../domain/pokemon';
import { PokemonsService } from '../../../../services/pokemons.service';

@Component({
  selector: 'app-my-pokemon-list',
  templateUrl: './my-pokemon-list.component.html',
  styleUrl: './my-pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPokemonListComponent implements OnInit{
  public myPokemons: MyPokemon[] = [];

  constructor(private readonly pokemonsService : PokemonsService) {}
  

  public ngOnInit(): void {
    this.myPokemons = this.pokemonsService.getMyPokemons();
  }

  public loadMore(): void{
    console.log('load more');
    
  }
}
