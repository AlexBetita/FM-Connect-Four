import { useNavigation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react'

import Player from './Player';
import GameBoard from './GameBoard';
import { Modal } from '../../context/Modal';
import Pause from '../Game/Pause'

import './index.css'

import playerOne from '../../assets/images/player-one.svg'
import playerTwo from '../../assets/images/player-two.svg'
import turnBackgroundRed from '../../assets/images/turn-background-red.svg'
import turnBackgroundYellow from '../../assets/images/turn-background-yellow.svg'

const Game = () => {

    const [ currentPlayer, setCurrentPlayer ] = useState(`PLAYER 1'S TURN`)
    const [ player1Score, setPlayer1Score ] = useState(0)
    const [ player2Score, setPlayer2Score ] = useState(0)
    const [ timer, setTimer ] = useState('30s')
    const [ pause, setPause ] = useState(true)

    const handleKeyUp = useCallback((event) => {
        if (event.key === 'Escape') {
          setPause((prevPause) => !prevPause);
        }
      }, []);
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp]);

    return (<>
            <div className='game-background'>
                <div className='game-inner'>

                    <div className='game-menu'>
                        <Player score={player1Score} playerIcon={playerOne}/>
                        
                        <GameBoard timer={timer} 
                                currentPlayer={currentPlayer}
                                setTimer={setTimer}
                                />

                        <Player score={player2Score} playerIcon={playerTwo}/>
                    </div>
                </div>
                <div className='game-bottom-neutral'></div>
            </div>
            {pause &&
                <Modal onClose={()=> setPause(false)}>
                    <Pause setPause={setPause}/>
                </Modal>
            }
    </>)
}

export default Game;