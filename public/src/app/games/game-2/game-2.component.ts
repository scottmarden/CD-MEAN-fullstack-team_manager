import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../team/player.service';

@Component({
  selector: 'app-game-2',
  templateUrl: './game-2.component.html',
  styleUrls: ['./game-2.component.css']
})
export class Game2Component implements OnInit {

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
		this._playerService.serviceUpdateGame2(player, "Playing")
			.then( response => {
				console.log(response)
				this.getPlayerStatus()
			})
			.catch( err => {
				console.log(err)
			})
	}

	notPlaying(player){
		this._playerService.serviceUpdateGame2(player, "Not Playing")
			.then( response => {
				console.log(response)
				this.getPlayerStatus()
			})
			.catch( err => {
				console.log(err)
			})
	}

	undecided(player){
		this._playerService.serviceUpdateGame2(player, "Undecided")
			.then( response => {
				console.log(response)
				this.getPlayerStatus()
			})
			.catch( err => {
				console.log(err)
			})
	}

}
