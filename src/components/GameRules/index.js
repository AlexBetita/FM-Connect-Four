import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './index.css'

import iconCheck from '../../assets/images/icon-check.svg'
import iconCheckHover from '../../assets/images/icon-check-hover.svg'

const GameRules = () => {

    const navigate = useNavigate()

    const [icon, setIcon] = useState(iconCheck)

    const checkButtonActive = (e) => {
        if(e.type === 'mousedown'){
            setIcon(iconCheckHover)
        } else {
            setIcon(iconCheck)
        }
    }

    const checkButton = () => {
        navigate('/')
    }

    return (
        <>
            <div className='game-rules-background'>
                <div className='game-rules-container'>

                    <div className='game-rules-main'>
                        <div>
                            RULES
                        </div>
                        <div className='objectives'>
                            <div>
                                OBJECTIVE
                            </div>
                            <div>
                                Be the first player to connect 4 of the same colored discs in a row (either 
                                vertically, horizontally, or diagonally).     
                            </div>
                        </div>
                        <div className='how-to-play'>
                            <div>
                                HOW TO PLAY
                            </div>
                            <div>
                                <div>
                                    <div>1</div> Red goes first in the first game.
                                </div>
                                <div>
                                    <div>2</div> Players must alternate turns, and only one disc can be dropped in each turn. 
                                </div>
                                <div>
                                    <div>3</div> The game ends when there is a 4-in-a-row or a stalemate.
                                </div>
                                <div>
                                    <div>4</div> The starter of the previous game goes second on the next game.
                                </div>
                            </div>
                        </div>

                        <img className='check-button' src={icon} draggable={false}
                            onClick={checkButton}
                            onMouseDown={checkButtonActive}
                            onMouseUp={checkButtonActive}
                            onMouseLeave={checkButtonActive}
                            alt='no-check-button'
                        />
                    </div>
                    <div className='game-rules-main-b'></div>

                </div>
            </div>
        </>
    )
}

export default GameRules;