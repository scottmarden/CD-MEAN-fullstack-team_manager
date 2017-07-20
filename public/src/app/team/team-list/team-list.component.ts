import { Component, OnInit } from '@angular/core';
import { PlayerService } from '.././player.service';

@Component({
	selector: 'app-team-list',
	templateUrl: './team-list.component.html',
	styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

	playerList: Array<any> = []

	constructor(private _playerService: PlayerService) { }

	ngOnInit() {
		this.getPlayers();
	}


	getPlayers(){
		this._playerService.getPlayerList()
			.then( playerList => {
				this.playerList = playerList;
			})
			.catch( err => {
				console.log(err)
			})
	}

	deletePlayer(player){
		console.log(player.player_name)
		if (confirm("Are you sure you want to delete " + player.player_name + "?")){
			this._playerService.serviceDeletePlayer(player)
				.then( response => {
					console.log(response)
					this.getPlayers()
				})
				.catch( err => {
					console.log(err)
				})
		}
	}
}
