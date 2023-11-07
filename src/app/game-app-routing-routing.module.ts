import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameHomeComponent } from './game-home/game-home.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  { path: 'home' , component: GameHomeComponent, title: 'Games Search API'},
  { path: 'gameDetails/:id', component: GameDetailsComponent, title: 'Game Details' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GameAppRoutingRoutingModule { }
