import { Component, OnInit } from '@angular/core';
import { PlayerService } from '.././player.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-player',
	templateUrl: './add-player.component.html',
	styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

	errors: Array<any> = [];

	newPlayer = {
		player_name: null,
		preferred_position: null
	}

	constructor(
		private _playerService: PlayerService,
		private _router: Router
	) { }

	ngOnInit() {
	}

	createPlayer(newPlayer){
		this._playerService.serviceAddPlayer(newPlayer)
			.then( response => {
				this._router.navigate(['/'])
			})
			.catch( err => {
				this.errors = JSON.parse(err.body)
				console.log(this.errors)
			})
	}

}
