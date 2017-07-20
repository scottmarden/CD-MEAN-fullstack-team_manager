const mongoose = require('mongoose');
let Player = mongoose.model('Player')

module.exports = {
	index: (req, res) => {
		res.render('/', controller.index)
	},

	getPlayers: (req, res) => {
		Player.find({}, (err, playerList) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				res.status(400).send(errors);
			}else{
				return res.json(playerList)
			}
		})

	},

	addPlayer: (req, res) => {
		let player = new Player(req.body)
		player.save( (err, savedPlayer) => {
			if (err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				res.status(400).send(errors);
			}else{
				return res.json(savedPlayer)
			}
		})
	},

	removePlayer: (req, res) => {
		Player.remove({_id: req.params.id}, (err, data) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				console.log(errors)
				res.status(400).send(errors);
			}else{
				return res.json(data);
 			}
		})
	},

	updateGame1: (req, res) => {
		Player.update({_id: req.params.id}, {game1: req.params.status}, (err, data) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				console.log(errors)
				res.status(400).send(errors);
			}else{
				return res.json(data);
			}
		})
	},

	updateGame2: (req, res) => {
		Player.update({_id: req.params.id}, {game2: req.params.status}, (err, data) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				console.log(errors)
				res.status(400).send(errors);
			}else{
				return res.json(data);
			}
		})
	},

	updateGame3: (req, res) => {
		Player.update({_id: req.params.id}, {game3: req.params.status}, (err, data) => {
			if(err){
				let errors = [];
				for (let x in err.errors){
					errors.push(err.errors[x].message)
				}
				console.log(errors)
				res.status(400).send(errors);
			}else{
				return res.json(data);
			}
		})
	}
}
