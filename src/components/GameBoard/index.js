import { useNavigation } from 'react-router-dom';

import './index.css'

const GameBoard = () => {
    return (<>
        <div className='game-board-background' style={{'position' : 'relative'}}>
            <div className='bottom-board-neutral'></div>
        </div>
    </>)
}

export default GameBoard;