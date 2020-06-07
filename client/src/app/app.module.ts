import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { WebSocketService } from './websocket.service';
import { WebStorageService } from './webstorage.service';
import { GameService } from './game.service';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [WebSocketService, WebStorageService, GameService],
  bootstrap: [AppComponent],
  entryComponents: [LobbyComponent]
})
export class AppModule { }
