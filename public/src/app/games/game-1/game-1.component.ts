import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../team/player.service';

@Component({
	selector: 'app-game-1',
	templateUrl: './game-1.component.html',
	styleUrls: ['./game-1.component.css']
})
export class Game1Component implements OnInit {

	playerList: Array<any> = []


	constructor( private _playerService: PlayerService) { }

	ngOnInit() {
		this.getPlayerStatus();
		console.log(this.playerList)
	}

	getPlayerStatus(){
		this._playerService.getPlayerList()
			.then( playerList => {
				this.playerList = playerList;
			})
			.catch( err => {
				console.log(err)
			})

	}

	playing(player){
		this._playerService.serviceUpdateGame1(player, "Playing")
			.then( response => {
				console.log(response)
				this.getPlayerStatus()
			})
			.catch( err => {
				console.log(err)
			})
	}

	notPlaying(player){
		this._playerService.serviceUpdateGame1(player, "Not Playing")
			.then( response => {
				console.log(response)
				this.getPlayerStatus()
			})
			.catch( err => {
				console.log(err)
			})
	}

	undecided(player){
		this._playerService.serviceUpdateGame1(player, "Undecided")
			.then( response => {
				console.log(response)
				this.getPlayerStatus()
			})
			.catch( err => {
				console.log(err)
			})
	}

}
