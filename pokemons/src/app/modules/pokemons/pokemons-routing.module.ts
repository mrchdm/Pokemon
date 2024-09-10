import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { MyPokemonListComponent } from './components/my-pokemon-list/my-pokemon-list.component';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes =[
  {path: '', pathMatch: 'full', redirectTo: '/all-pokemons'},
  {
path:'', 
component: PokemonsComponent,
children: [
  {path: 'all-pokemons', component: PokemonsListComponent},
  {path: 'my-collection', component: MyPokemonListComponent}
]

  }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
