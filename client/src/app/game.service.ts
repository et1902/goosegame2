import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { WebSocketService } from './websocket.service';

@Injectable({
	providedIn: 'root'
})

export class GameService {
    public playername: string;
    public gameID: string;
    public gameData: any;

    constructor(private WebSocketService: WebSocketService)
    {        
        this.WebSocketService.listen('GameUpdate').subscribe((data) => {
            console.log("Recieved GameUpdate:");
            console.log(data);
          })
    }

    public joinGame()
    {
        if( this.playername != undefined )
        {
            //gameID can be null-> server should create new one
            var data = [ this.playername, this.gameID ]

            //@@@TODO: evaluate callback and show popup on error
            this.WebSocketService.emit("JoinGame", data, null );
            return;
        }
        //@@@TODO: popup error window and return to lobby
        console.error("cannot join game without username!");  
    }

    public leaveGame()
    {
        this.WebSocketService.emit("LeaveGame", null, null );
    }

    public getUpdate()
    {
        this.WebSocketService.emit("GameUpdate", "", null );
    }

    listen()
	{
		return new Observable((subscriber) => {
			this.WebSocketService.listen('GameUpdate').subscribe((data) => {
                subscriber.next(data);
              })
		})
	}


    public play()
    {
        var data = [ this.playername ];

        this.WebSocketService.emit("Play", data, (callback) =>
        {
            console.log(callback);
        });
    }


}