import { useNavigation } from 'react-router-dom';
import { useState } from 'react'

import './index.css'

import cfgLogo from '../../assets/images/logo.svg'
import playerOne from '../../assets/images/player-one.svg'
import playerTwo from '../../assets/images/player-two.svg'
import boardBlack from '../../assets/images/board-layer-black-large.svg'
import boardWhite from '../../assets/images/board-layer-white-large.svg'
import turnBackgroundRed from '../../assets/images/turn-background-red.svg'
import turnBackgroundYellow from '../../assets/images/turn-background-yellow.svg'

const GameBoard = () => {

    const [currentPlayer, setCurrentPlayer] = useState(`PLAYER 1'S TURN`)
    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)
    const [timer, setTimer] = useState('30s')

    return (<>
        <div className='game-board-background'>
            <div className='game-board-inner'>

                <div className='game-board-menu'>

                    <div className='player-1-box'>
                        <div className='player-1'>
                            <img className='player-1-image' src={playerOne}/>
                            <div style={{'fontSize' : '1.25rem', 'paddingTop' :'20px'}}> PLAYER 1 </div>
                            <div className='player-1-score'> 
                                {player1Score}
                            </div>
                        </div>
                        <div className='player-1-b'></div>
                    </div>

                    <div className='game-board-body'>
                        <div className='game-board-top'>
                            <div className='menu'>
                                MENU
                            </div>
                            
                            <img style={{'height' : '52px', 'width' : '52px', 'paddingLeft': '21px'}} 
                                src={cfgLogo}/>

                            <div className='restart'>
                                RESTART
                            </div>
                        </div>

                        <div className='game-board'>

                            <img className='board-white' src={boardWhite}/>

                            <img className='board-black' src={boardBlack}/>
                            <div className='turn-background'>
                                <img style={{'position' : 'absolute'}}src={turnBackgroundRed}/>
                                <div className='current-player'>
                                    {currentPlayer}
                                </div>
                                <div className='timer'>
                                    {timer}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='player-2-box'>
                        <div className='player-2'>
                            <img className='player-2-image' src={playerTwo}/>
                            <div style={{'fontSize' : '1.25rem', 'paddingTop' :'20px'}}> PLAYER 2 </div>
                            <div className='player-2-score'>
                                {player2Score}
                            </div>
                        </div>
                        <div className='player-2-b'></div>
                    </div>
                </div>
            </div>
            <div className='bottom-board-neutral'></div>
        </div>
    </>)
}

export default GameBoard;