import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { AddPlayerComponent } from './team/add-player/add-player.component';
import { GamesComponent } from './games/games.component';
import { Game1Component } from './games/game-1/game-1.component';
import { Game2Component } from './games/game-2/game-2.component';
import { Game3Component } from './games/game-3/game-3.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/team/player-list' },
	{ path: 'team', component: TeamComponent, children: [
		{ path: 'add-player', component: AddPlayerComponent},
		{ path: 'player-list', component: TeamListComponent},
	]},
	{ path: 'games', component: GamesComponent, children: [
		{ path: 'game1', component: Game1Component },
		{ path: 'game2', component: Game2Component },
		{ path: 'game3', component: Game3Component },

	]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
