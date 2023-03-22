import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import Winner from '../Winner'

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

const GameBoard = ({timer, currentPlayer, setTimer, pause, setCurrentPlayer, 
                    setPlayer1Score, setPlayer2Score}) => {

    const navigate = useNavigate()

    const markerRef = useRef();
    const time = useRef()
    const playerTurn = useRef()
    const whiteBoardRef = useRef();
    const blackBoardRef = useRef();

    const [ column, setColumn ] = useState('4')
    const [ row, setRow ] = useState('1')
    const [ counter, setCounter ] = useState(counterRed)
    const [ marker, setMarker ] = useState(markerRed)
    const [ turn, setTurn ] = useState(turnBackgroundRed)
    const [ winner, setWinner ] = useState('')
    

    const cellsRef = useRef({
        '1' : [],
        '2' : [],
        '3' : [],
        '4' : [],
        '5' : [],
        '6' : [],
        '7' : []
    })

    const colorChecker = (one, two, three, four) => {
        if(one === two && 
            two === three &&
            three === four){
             setWinner(one)
             return true
         }
    }

    const checkWinner = () => {
        // horizontally
        for(let c = 1; c <= 4; c++){
            const columnOne = cellsRef.current[c]
            const columnTwo = cellsRef.current[c+1]
            const columnThree = cellsRef.current[c+2]
            const columnFour = cellsRef.current[c+3]

            for(let r = 0; r < columnOne.length; r++){
                const cellOneElement = columnOne[r]

                const cellOneColor = cellOneElement.firstChild.classList.value.split(' ')[1]
                if (cellOneColor){
                    const cellTwoElement = columnTwo[r]
                    const cellThreeElement = columnThree[r]
                    const cellFourElement = columnFour[r]
    
                    const cellTwoColor = cellTwoElement.firstChild.classList.value.split(' ')[1]
                    const cellThreeColor = cellThreeElement.firstChild.classList.value.split(' ')[1]
                    const cellFourColor = cellFourElement.firstChild.classList.value.split(' ')[1]

                    if(colorChecker(cellOneColor, cellTwoColor, cellThreeColor, cellFourColor)) return
                }
            }
        }

        // vertical
        for(let c = 1; c <= 7; c++){
            const currentColumn = cellsRef.current[c]
            for(let r = currentColumn.length - 4; r >= 0; r--){
                const rowOne = currentColumn[r]
                const cellOneColor = rowOne.firstChild.classList.value.split(' ')[1]

                if(cellOneColor) {
                    const rowTwo = currentColumn[r+1]
                    const rowThree = currentColumn[r+2]
                    const rowFour = currentColumn[r+3]
    
                    const cellTwoColor = rowTwo.firstChild.classList.value.split(' ')[1]
                    const cellThreeColor = rowThree.firstChild.classList.value.split(' ')[1]
                    const cellFourColor = rowFour.firstChild.classList.value.split(' ')[1]
    
                    if(colorChecker(cellOneColor, cellTwoColor, cellThreeColor, cellFourColor)) return
                }

            }
        }
    }

    const interValGenerator = () => {
        return setInterval(()=> {
            let currentTime = timer.slice(0,2)
            currentTime = parseInt(currentTime) - 1
            setTimer(`${currentTime}s`)
        }, 1000)
    }

    useEffect(()=> {

        let timerInterval = interValGenerator()

        if(pause){
            clearInterval(timerInterval)
            timerInterval = ''
        } 

        if(!pause && !timerInterval){
            timerInterval = interValGenerator()
        }

        if(winner){
            whiteBoardRef.current.style.pointerEvents = 'unset'
            blackBoardRef.current.style.pointerEvents = 'unset'
            if(winner === 'red') setPlayer1Score(prevScore => prevScore + 1)
            else setPlayer2Score(prevScore => prevScore + 1)
            clearInterval(timerInterval)
        }

        return () => {
            clearInterval(timerInterval)
        }
        
    },[timer, pause])

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
        const columnLength = cellsRef.current[column].length
        for(let i = columnLength - 1; i >= 0; i--){
            const currentCell = cellsRef.current[column][i]
            if(!currentCell.firstChild.src && !droppedCounter){
                currentCell.firstChild.src = counter
                droppedCounter = true
                if (counter === counterRed) {
                    currentCell.firstChild.classList.add('red')
                    setCounter(counterYellow)
                    setMarker(markerYellow)
                    setTurn(turnBackgroundYellow)
                    time.current.style.color = 'black'
                    playerTurn.current.style.color = 'black'
                    setTimer('30s')
                    setCurrentPlayer(`PLAYER 2'S TURN`)
                }
                else {
                    currentCell.firstChild.classList.add('yellow')
                    setCounter(counterRed)
                    setMarker(markerRed)
                    setTurn(turnBackgroundRed)
                    time.current.style.color = 'white'
                    playerTurn.current.style.color = 'white'
                    setTimer('30s')
                    setCurrentPlayer(`PLAYER 1'S TURN`)
                }
            }
        }
        checkWinner()
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
                        <img ref={whiteBoardRef} className='game-board-white' src={boardWhite} draggable={false}/>
                    </div>


                    <img ref={blackBoardRef} className='game-board-black' src={boardBlack} draggable={false}/>

                    {
                        !winner ?
                        <div className='turn-background'>
                            <img style={{'position' : 'absolute'}} src={turn}/>
                            <div className='current-player' ref={playerTurn}>
                                {currentPlayer}
                            </div>
                            <div className='game-timer'ref={time}>
                                {timer}
                            </div>
                        </div> :
                        <Winner winner={winner}/>
                    }
                </div>
            </div>
        </>
    )
}

export default GameBoard;