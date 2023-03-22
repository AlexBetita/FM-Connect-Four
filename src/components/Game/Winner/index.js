import './index.css'

const Winner = ({winner}) => {
    return (<>
    
    <div className='winner-block'>
        <div className='winning-player'>
            {
                winner === 'red' ? 'PLAYER 1' : 'PLAYER 2'
            }
        </div>

        <div className='win'>
            WINS
        </div>
        <div className='play-again-button'>
            PLAY AGAIN
        </div>
    </div>
    <div className='winner-block-b'></div>
    
    </>)
}

export default Winner;