const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let PlayerSchema = new Schema({
	player_name: {
		type: String,
		required: [true, "Please enter a player name"],
		minlength: [2, "Player name must be at least 2 characters long."]
	},
	preferred_position: {
		type: String,
	},
	game1: {type: String, default: "Undecided"},
	game2: {type: String, default: "Undecided"},
	game3: {type: String, default: "Undecided"},

},
{timestamps: true});


mongoose.model("Player", PlayerSchema)
