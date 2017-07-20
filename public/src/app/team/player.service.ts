import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class PlayerService {

	constructor(private _http: Http) { }

	getPlayerList(){
		return this._http.get('/api/players').map(response => response.json()).toPromise()
	}

	serviceAddPlayer(newPlayer){
		return this._http.post('/api/players', newPlayer).map(response => response.json()).toPromise()
	}

	serviceDeletePlayer(player){
		return this._http.delete("/api/delete/" + player._id).map(response => response.json()).toPromise()
	}

	serviceUpdateGame1(player, status){
		return this._http.get("/api/game1/" + player._id + "/" + status).map(response => response.json()).toPromise()
	}

	serviceUpdateGame2(player, status){
		return this._http.get("/api/game2/" + player._id + "/" + status).map(response => response.json()).toPromise()
	}

	serviceUpdateGame3(player, status){
		return this._http.get("/api/game3/" + player._id + "/" + status).map(response => response.json()).toPromise()
	}

}
