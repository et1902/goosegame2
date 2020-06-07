import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()

export class WebSocketService {
	socket: any;
	readonly url: string = "ws://localhost:3000";

	constructor()
	{	
		this.socket = io( this.url );
	}

	listen( event: string)
	{
		return new Observable((subscriber) => {
			this.socket.on(event, (data) => {
				subscriber.next(data);
			})
		})
	}
/*
	emit( event: string, data: any)
	{
		this.socket.emit( event, data );
	}
*/
	emit( event: string, data: any, callback:any)
	{
		console.log("Emit event" + event + "with data:");
		console.log(data);

		this.socket.emit( event, data, callback);
	}


}
