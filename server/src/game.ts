import * as lodash from "lodash";

export class Game
{
    protected players = [];
    protected activePlayerID;

    constructor(protected gameID: string , player: Player)
    {
        this.players.push( player );
    }

    join()
    {

    }

    sendGameUpdate()
    {
        this.players.forEach( (player: Player) =>
        {
            console.debug('Sending GameUpdate to player' + player.playername);
            player.socket.emit('GameUpdate', this);
        })
    }

}

export class Player
{
    protected position = 0;
    
    constructor( public socket, public playername)
    {

    }

}