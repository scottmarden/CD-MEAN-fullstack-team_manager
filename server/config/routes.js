let controller = require('../controllers/controller.js');
let path = require('path');

module.exports = app => {
	app.get('/api/players', controller.getPlayers);
	app.post('/api/players', controller.addPlayer);
	app.delete('/api/delete/:id', controller.removePlayer);
	app.get('/api/game1/:id/:status', controller.updateGame1);
	app.get('/api/game2/:id/:status', controller.updateGame2);
	app.get('/api/game3/:id/:status', controller.updateGame3);

	app.all("*", (req,res,next) => {
	    res.sendFile(path.resolve("./public/dist/index.html"))
	});
}
