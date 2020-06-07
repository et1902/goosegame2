import * as lodash from "lodash";
import * as express from "express";
import * as socketio from "socket.io";
import * as shortid from  "shortid";

import {Game, Player} from "./game";


const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req: any, res: any) => {
	res.send('HelloWorld');
});

// setup socket.io
let http = require("http").Server(app);
let io = require("socket.io")(http);

var games = [];

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function(socket: any) {

	socket.on('JoinGame', function(data: any)
	{
		console.log('User' + data.playername + 'wants to join game' + data.gameID);
		var game =  games.find( game => game.gameID == data.gameID)

		if( game )
		{
			console.log('game does already exist. joining ...');
			game.join( new Player( socket, data.playername) );
		}
		else{
			console.log('cannot find game' + data.gameID + '! Creating a new one...');

			var gameID = data.gameID;
			if( gameID == null) 
			{
				gameID = shortid.generate();
				console.log('No gameID defined, generated one: ' + gameID);
			}

			game = new Game( gameID , new Player( socket, data.playername) );

			games.push(game);
		}
	})

	socket.on('LeaveGame', function(data: any)
	{
		//@@@TODO
	})

});

const server = http.listen(process.env.PORT || 3000, function() {
	console.log("listening on *:3000");
});