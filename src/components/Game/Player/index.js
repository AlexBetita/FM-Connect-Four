import './index.css'

const Player = ({score, playerIcon, player}) => {

    return (
        <>
            <div className={`player-box-${player[player.length - 1]}`}>
                <div className='player'>
                    <img className='player-image' src={playerIcon} alt='player'/>
                    <div className='player-text'> {player} </div>
                    <div className='player-score'> 
                        {score}
                    </div>
                </div>
                <div className='player-b'></div>
            </div>
        </>    
    )
}

export default Player;