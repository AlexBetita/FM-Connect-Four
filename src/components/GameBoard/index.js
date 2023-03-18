import { useNavigation } from 'react-router-dom';

import './index.css'

import cfgLogo from '../../assets/images/logo.svg'
import playerOne from '../../assets/images/player-one.svg'
import playerTwo from '../../assets/images/player-two.svg'

const GameBoard = () => {
    return (<>
        <div className='game-board-background'>
            <div className='game-board-inner'>

                <div className='game-board-menu'>

                    <div className='player-1-box'>
                        <div className='player-1'></div>
                        <div className='player-1-b'></div>
                    </div>

                    <div className='game-board'>
                        <div>

                        </div>
                    </div>

                    <div className='player-2-box'>
                        <div className='player-2'></div>
                        <div className='player-2-b'></div>
                    </div>
                </div>
            </div>
            <div className='bottom-board-neutral'></div>
        </div>
    </>)
}

export default GameBoard;