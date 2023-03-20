import './index.css'
import boardBlack from '../../../assets/images/board-layer-black-large.svg'
import boardWhite from '../../../assets/images/board-layer-white-large.svg'
import cfgLogo from '../../../assets/images/logo.svg'
import counterRed from '../../../assets/images/counter-red-large.svg'
import counterYellow from '../../../assets/images/counter-yellow-large.svg'

const GameBoard = ({timer, turnBackground, currentPlayer}) => {

    return (
        <>
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

                    <div style={{'position' : 'relative'}}>
                        <div className='cells'>
                            {
                                Array(6).fill(null).map((e, index)=>{
                                    const currentRow = index + 1
                                    return <>
                                            {
                                                Array(7).fill(null).map((e, index)=>{
                                                    const currentColumn = index + 1
                                                    return <>
                                                        <div className={`row-${currentRow} col-${currentColumn}`}>
                                                            <img src={counterRed}/>
                                                        </div>
                                                    </>
                                                })
                                            }
                                    </>
                                })
                            }
                        </div>
                        <img className='game-board-white' src={boardWhite}/>
                    </div>



                    <img className='game-board-black' src={boardBlack}/>


                    <div className='turn-background'>
                        <img style={{'position' : 'absolute'}}src={turnBackground}/>
                        <div className='current-player'>
                            {currentPlayer}
                        </div>
                        <div className='game-timer'>
                            {timer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameBoard;