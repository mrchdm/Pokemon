import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../../domain/pokemon';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.scss'
})
export class PokemonsListComponent implements OnInit{
  public pokemons: Pokemon[]=[]
  public ngOnInit(): void {

    this.pokemons = [{
      name: "bulbasaur",
      id: 1,
    },
    {
      name: "ivysaur",
      id: 2
    },
    {
      name: "venusaur",
      id: 3
    },
    {
      name: "charmander",
      id: 4
    },
    {
      name: "charmeleon",
      id: 5
    },
    {
      name: "charizard",
      id: 6
    },
    {
      name: "squirtle",
      id: 7
    },
    {
      name: "wartortle",
      id: 8
    },
    {
      name: "blastoise",
      id: 9
    },
    {
      name: "caterpie",
      id: 10
    },
    {
      name: "caterpie",
      id: 11
    },
    {
      name: "caterpie",
      id: 12
    }
  ];
  
  }
public loadMore(): void{
  console.log('load more');
  
}

public catchPokemon(pokemon: Pokemon): void {
  console.log(pokemon);
  
}
}
