import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from './game.service';
import { LobbyComponent } from './lobby.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit
{
  constructor(private GameService: GameService, public dialog: MatDialog)
  {
  }

  ngOnInit()
  {
    //@@@TODO: fix Modal
    this.openModal();
  }

  openModal()
  {
    let modal = this.dialog.open(LobbyComponent, {
    })

    modal.afterClosed().subscribe(result => {

      //@@@TODO: pass username and gameID to gameservice
      console.log(result);
      this.GameService.playername = result.playername;
      this.GameService.gameID = result.gameID;
    });
  }



}
