import cfgLogo from '../../assets/images/logo.svg'
import plaverVplayer from '../../assets/images/player-vs-player.svg'

import './index.css'

import { useRef } from 'react'

const MainMenu = () => {

    const playerVersusPlayerRef = useRef('')
    const playerVersusPlayerBRef = useRef('')
    const gameRulesRef = useRef('')
    const gameRulesBRef = useRef('')


    const playerVersusButton = () => {
        console.log('player')
    }

    const gameRulesButton = () => {
        console.log('game rules')
    }

    const playerVersusButtonMouseDown = (e) => {
        if(e.type === 'mousedown'){
            playerVersusPlayerRef.current.style.borderColor = 'hsla(257, 67%, 51%, 1)'
            playerVersusPlayerBRef.current.style.backgroundColor = 'hsla(257, 67%, 51%, 1)'
            playerVersusPlayerBRef.current.style.borderColor = 'hsla(257, 67%, 51%, 1)'
        } else {
            playerVersusPlayerRef.current.style.borderColor = 'hsla(0,0%,0%,1)'
            playerVersusPlayerBRef.current.style.backgroundColor = 'hsla(0,0%,0%,1)'
            playerVersusPlayerBRef.current.style.borderColor = 'hsla(0,0%,0%,1)'
        }
    }

    const gameRulesButtonMouseDown = (e) => {
        if(e.type === 'mousedown'){
            gameRulesRef.current.style.borderColor = 'hsla(257, 67%, 51%, 1)'
            gameRulesBRef.current.style.backgroundColor = 'hsla(257, 67%, 51%, 1)'
            gameRulesBRef.current.style.borderColor = 'hsla(257, 67%, 51%, 1)'
        } else {
            gameRulesRef.current.style.borderColor = 'hsla(0,0%,0%,1)'
            gameRulesBRef.current.style.backgroundColor = 'hsla(0,0%,0%,1)'
            gameRulesBRef.current.style.borderColor = 'hsla(0,0%,0%,1)'
        }
    }

    return (
        <>
            <div className="main-menu">
                <div className="main-menu-items">
                    <img src={cfgLogo} className="menu-logo"/>

                    <div className='player-v-player-button' onClick={playerVersusButton}
                        onMouseDown={playerVersusButtonMouseDown}
                        onMouseUp={playerVersusButtonMouseDown}
                        ref={playerVersusPlayerRef}
                    >
                        <div>
                        PLAY VS PLAYER
                        </div>
                        <img src={plaverVplayer}/>
                    </div>
                    <div className='player-v-player-button-b' ref={playerVersusPlayerBRef}></div>
                    <div className='game-rules-button' onClick={gameRulesButton}
                        onMouseDown={gameRulesButtonMouseDown}
                        onMouseUp={gameRulesButtonMouseDown}
                        ref={gameRulesRef}
                    >
                        <div>
                        GAME RULES
                        </div>
                    </div>
                    <div className='game-rules-button-b' ref={gameRulesBRef}></div>
                </div>
            </div>
            <div className="main-menu-background">
            </div>
        </>
    )
}


export default MainMenu;