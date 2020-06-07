import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { GameService } from '../game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styles: []
})
export class GameComponent implements OnInit, OnDestroy{

    constructor(private Game: GameService)
    {
    }

    ngOnInit()
    {
        this.Game.joinGame();
    }

    ngOnDestroy()
    {
        this.Game.leaveGame();
    }

    play()
    {
        this.Game.play();
    }

}