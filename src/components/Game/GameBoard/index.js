import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import './index.css'

import boardBlack from '../../../assets/images/board-layer-black-large.svg'
import boardWhite from '../../../assets/images/board-layer-white-large.svg'
import cfgLogo from '../../../assets/images/logo.svg'
import counterRed from '../../../assets/images/counter-red-large.svg'
import counterYellow from '../../../assets/images/counter-yellow-large.svg'
import markerRed from '../../../assets/images/marker-red-2.svg'
import markerYellow from '../../../assets/images/marker-yellow-2.svg'

const GameBoard = ({timer, turnBackground, currentPlayer}) => {

    const navigate = useNavigate()

    const markerRef = useRef();

    const cellsRef = useRef({
        '1' : [],
        '2' : [],
        '3' : [],
        '4' : [],
        '5' : [],
        '6' : []
    })

    const menuButton = () => {
        navigate('/')
    }

    const moveMarker = (e) => {
        const currentColumn = e.target.className.split(' ')[1][4]
        if (currentColumn === '4') {
            markerRef.current.style.left = 'unset'
            markerRef.current.style.right = 'unset'
        } else if (currentColumn === '1') {
            markerRef.current.style.left = '32px'
            markerRef.current.style.right = '0px'
        } else if (currentColumn === '2'){
            markerRef.current.style.left = '120px'
            markerRef.current.style.right = '0px'
        } else if (currentColumn === '3') {
            markerRef.current.style.left = '208px'
            markerRef.current.style.right = '0px'
        } else if (currentColumn === '5') {
            markerRef.current.style.left = '0px'
            markerRef.current.style.right = '32px'
        } else if (currentColumn === '6') {
            markerRef.current.style.left = '0px'
            markerRef.current.style.right = '120px'
        } else if (currentColumn === '7'){
            markerRef.current.style.left = '0x'
            markerRef.current.style.right = '210px'
        }
    }

    const createCells = () => {
        const cellArray = new Array(6).fill(null).map((e, index)=>{
            const currentRow = index + 1
            return (
                <React.Fragment key={`row-${currentRow}`}>
                    {
                        new Array(7).fill(null).map((e, index)=>{
                            const currentColumn = index + 1
                            return (
                                    <div
                                        className={`row-${currentRow} col-${currentColumn} cell`}
                                        key={`cell-${currentRow}-${currentColumn}`}
                                        ref={(element)=>{
                                            cellsRef.current[currentRow].push(element)
                                        }}
                                        onMouseEnter={moveMarker}
                                        onClick={moveMarker}
                                    >
                                    <img 
                                        key={`counter-${currentRow}-${currentColumn}`}
                                        src={counterRed}
                                        style={{'pointerEvents': 'none'}}
                                    />
                                </div>
                            )
                        })
                    }
                </React.Fragment>
            )
          })
        return cellArray
    }

    return (
        <>
            <div className='game-board-body'>
                <div className='game-board-top'>
                    <div className='menu' onClick={menuButton}>
                        MENU
                    </div>
                    
                    <img style={{'height' : '52px', 'width' : '52px', 'paddingLeft': '21px'}} 
                        src={cfgLogo}/>

                    <div className='restart'>
                        RESTART
                    </div>
                </div>

                <div className='game-board'>
                    <img className='game-marker' src={markerRed} ref={markerRef}/>
                    <div style={{'position' : 'relative'}}>

                        <div className='cells'>
                            {
                                createCells().map(e => e)
                            }
                        </div>
                        <img style={{'pointerEvents': 'none'}} className='game-board-white' src={boardWhite}/>
                    </div>


                    <img style={{'pointerEvents': 'none'}} className='game-board-black' src={boardBlack}/>


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