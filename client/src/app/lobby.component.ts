import { Component, SimpleChange} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styles: []
})
export class LobbyComponent
{
    playername: string;
    gameID: any;

    constructor(private dialog: MatDialogRef<LobbyComponent>)
    {

    }

    close()
    {
      if( this.playername == undefined || this.playername == "" )
      {
        console.error("Please define playername!");
        return;
      }
      this.dialog.close({playername: this.playername, gameID: this.gameID});
    }
}
