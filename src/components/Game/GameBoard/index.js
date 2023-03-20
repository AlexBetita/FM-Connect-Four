import { useRef, useState, useEffect } from 'react'
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
import turnBackgroundRed from '../../../assets/images/turn-background-red.svg'
import turnBackgroundYellow from '../../../assets/images/turn-background-yellow.svg'

const GameBoard = ({timer, currentPlayer, setTimer}) => {

    const navigate = useNavigate()

    const markerRef = useRef();
    const time = useRef()
    const playerTurn = useRef()

    const [ column, setColumn ] = useState('4')
    const [ row, setRow ] = useState('1')
    const [ counter, setCounter ] = useState(counterRed)
    const [ marker, setMarker ] = useState(markerRed)
    const [ turn, setTurn ] = useState(turnBackgroundRed)
    

    const cellsRef = useRef({
        '1' : [],
        '2' : [],
        '3' : [],
        '4' : [],
        '5' : [],
        '6' : [],
        '7' : []
    })

    useEffect(()=> {
        const timerInterval = setInterval(()=> {
            let currentTime = timer.slice(0,2)
            currentTime = parseInt(currentTime) - 1
            setTimer(`${currentTime}s`)
        }, 1000)

        return () => {
            clearInterval(timerInterval)
        }
        
    },[timer])

    const menuButton = () => {
        navigate('/')
    }

    const moveMarker = (e) => {
        const currentColumn = e.target.className.split(' ')[1][4]
        const currentRow = e.target.className.split(' ')[0][4]
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
        } else if (currentColumn === '7') {
            markerRef.current.style.left = 'unset'
            markerRef.current.style.right = '32px'
        } else if (currentColumn === '6') {
            markerRef.current.style.left = 'unset'
            markerRef.current.style.right = '120px'
        } else if (currentColumn === '5'){
            markerRef.current.style.left = 'unset'
            markerRef.current.style.right = '210px'
        }
        setRow(currentRow)
        setColumn(currentColumn)
    }

    const dropCounter = () => {
        let droppedCounter = false
        // cellsRef.current[column].forEach(async (e) => {
        //     if(!e.firstChild.src && !droppedCounter){
        //         e.firstChild.src = counter
        //         droppedCounter = true
        //         if (counter === counterRed) await setCounter(counterYellow)
        //         else await setCounter(counterRed)
        //     }
        // })
        const columnLength = cellsRef.current[column].length
        for(let i = columnLength - 1; i >= 0; i--){
            const currentCell = cellsRef.current[column][i]
            if(!currentCell.firstChild.src && !droppedCounter){
                currentCell.firstChild.src = counter
                droppedCounter = true
                if (counter === counterRed) {
                    setCounter(counterYellow)
                    setMarker(markerYellow)
                    setTurn(turnBackgroundYellow)
                    time.current.style.color = 'black'
                    playerTurn.current.style.color = 'black'
                    setTimer('30s')
                }
                else {
                    setCounter(counterRed)
                    setMarker(markerRed)
                    setTurn(turnBackgroundRed)
                    time.current.style.color = 'white'
                    playerTurn.current.style.color = 'white'
                    setTimer('30s')
                }
            }
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
                                            if(cellsRef.current[currentColumn].length < 6 && element){
                                                cellsRef.current[currentColumn].push(element)
                                            }
                                        }}
                                        onMouseEnter={moveMarker}
                                        onClick={dropCounter}
                                    >
                                    <img 
                                        key={`counter-${currentRow}-${currentColumn}`}
                                        // src={counterRed}
                                        className='cell-image'
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
                    <img className='game-marker' src={marker} ref={markerRef}/>
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
                        <img style={{'position' : 'absolute'}} src={turn}/>
                        <div className='current-player' ref={playerTurn}>
                            {currentPlayer}
                        </div>
                        <div className='game-timer'ref={time}>
                            {timer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameBoard;