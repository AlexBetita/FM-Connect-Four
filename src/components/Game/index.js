import { useNavigation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react'

import Player from './Player';
import GameBoard from './GameBoard';
import { Modal } from '../../context/Modal';
import Pause from '../Game/Pause'

import './index.css'

import playerOne from '../../assets/images/player-one.svg'
import playerTwo from '../../assets/images/player-two.svg'
import flatSmile from '../../assets/images/cpu.svg'
import shock from '../../assets/images/shock.svg'

import turnBackgroundRed from '../../assets/images/turn-background-red.svg'
import turnBackgroundYellow from '../../assets/images/turn-background-yellow.svg'

const Game = () => {

    const [ currentPlayer, setCurrentPlayer ] = useState(`PLAYER 1'S TURN`)
    const [ player1Score, setPlayer1Score ] = useState(0)
    const [ player2Score, setPlayer2Score ] = useState(0)
    const [ player1Icon, setPlayer1Icon ] = useState(playerOne)
    const [ player2Icon, setPlayer2Icon ] = useState(playerTwo)
    const [ timer, setTimer ] = useState('30s')
    const [ pause, setPause ] = useState(false)

    const handleKeyUp = useCallback((event) => {
        if (event.key === 'Escape') {
          setPause((prevPause) => !prevPause);
        }
      }, []);
    
    useEffect(() => {

        if(pause){
            setPlayer1Icon(shock)
            setPlayer2Icon(flatSmile)
        } else {
            setPlayer1Icon(playerOne)
            setPlayer2Icon(playerTwo)
        }

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp, pause, player1Score, player2Score]);

    return (<>
            <div className='game-background'>
                <div className='game-inner'>

                    <div className='game-menu'>
                        <Player score={player1Score} playerIcon={player1Icon} player={'PLAYER 1'}/>
                        
                        <GameBoard timer={timer} 
                                currentPlayer={currentPlayer}
                                setTimer={setTimer}
                                pause={pause}
                                setCurrentPlayer={setCurrentPlayer}
                                setPlayer1Score={setPlayer1Score}
                                setPlayer2Score={setPlayer2Score}
                                />

                        <Player score={player2Score} playerIcon={player2Icon} player={'PLAYER 2'}/>
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