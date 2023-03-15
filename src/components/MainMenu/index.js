import cfgLogo from '../../assets/images/logo.svg'
import plaverVplayer from '../../assets/images/player-vs-player.svg'

import './index.css'

const MainMenu = () => {
    return (
        <>
            <div className="main-menu">
                <div className="main-menu-items">
                    <img src={cfgLogo} className="menu-logo"/>

                    <div className='player-v-player-button'>
                        <div>
                        PLAY VS PLAYER
                        </div>
                        <img src={plaverVplayer}/>
                    </div>
                    <div className='player-v-player-button-b'> </div>
                    <div className='game-rules-button'>
                        <div>
                        GAME RULES
                        </div>
                    </div>
                    <div className='game-rules-button-b'></div>
                </div>
            </div>
            <div className="main-menu-background">
            </div>
        </>
    )
}


export default MainMenu;