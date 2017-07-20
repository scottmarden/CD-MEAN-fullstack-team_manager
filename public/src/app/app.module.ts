import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { AddPlayerComponent } from './team/add-player/add-player.component';
import { Router } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { Game1Component } from './games/game-1/game-1.component';
import { Game2Component } from './games/game-2/game-2.component';
import { Game3Component } from './games/game-3/game-3.component';
import { PlayerService } from './team/player.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamListComponent,
    AddPlayerComponent,
    GamesComponent,
    Game1Component,
    Game2Component,
    Game3Component,
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule,
	HttpModule,
	AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
