import { useNavigation } from 'react-router-dom';
import { useState } from 'react'

import Player from './Player';
import GameBoard from './GameBoard';

import './index.css'

import playerOne from '../../assets/images/player-one.svg'
import playerTwo from '../../assets/images/player-two.svg'
import turnBackgroundRed from '../../assets/images/turn-background-red.svg'
import turnBackgroundYellow from '../../assets/images/turn-background-yellow.svg'

const Game = () => {

    const [currentPlayer, setCurrentPlayer] = useState(`PLAYER 1'S TURN`)
    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)
    const [timer, setTimer] = useState('30s')

    return (<>
        <div className='game-background'>
            <div className='game-inner'>

                <div className='game-menu'>
                    <Player score={player1Score} playerIcon={playerOne}/>
                    
                    <GameBoard timer={timer} 
                            turnBackground={turnBackgroundRed} 
                            currentPlayer={currentPlayer}/>

                    <Player score={player2Score} playerIcon={playerTwo}/>
                </div>
            </div>
            <div className='game-bottom-neutral'></div>
        </div>
    </>)
}

export default Game;