import './index.css'

const Player = ({score, playerIcon, player}) => {

    return (
        <>
            <div className='player-box'>
                <div className='player'>
                    <img className='player-image' src={playerIcon} alt='player'/>
                    <div style={{'fontSize' : '1.25rem', 'paddingTop' :'20px'}}> {player} </div>
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