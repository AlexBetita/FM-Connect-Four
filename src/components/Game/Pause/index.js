import { useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'

const Pause = ({setPause, restart, resetStyle}) => {

    const navigate = useNavigate()

    const continueRef = useRef({
        'continue' : [],
        'restart' : [],
        'quit' : []
    })

    const handeleNavigate = (action) => {
        if(action === 'continue') {
            setPause((prevPause) => !prevPause);
        } else if (action === 'restart') {
            console.log('restart')
        } else {
            navigate('/')
        }
    }

    const checkButtonActive = (e, action) => {
        if(e.type === 'mousedown'){
            continueRef.current[action][1].style.backgroundColor = 'hsla(257, 67%, 51%, 1)'
            continueRef.current[action][1].style.borderColor = 'hsla(257, 67%, 51%, 1)'
            continueRef.current[action][0].style.borderColor = 'hsla(257, 67%, 51%, 1)'
        } else {
            continueRef.current[action][1].style.backgroundColor = 'hsla(0,0%,0%,1)'
            continueRef.current[action][1].style.borderColor = 'hsla(0,0%,0%,1)'
            continueRef.current[action][0].style.borderColor = 'hsla(0,0%,0%,1)'
        }
    }

    const handleKeyUp = useCallback((event) => {
        if (event.key === 'Escape') {
          setPause((prevPause) => !prevPause);
        }
      }, []);

    useEffect(()=> {

        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    },[])

    return (
     <>
        <div className='pause-menu'>
            <div className='pause'>
                PAUSE
            </div>
            <div className='pause-continue'
                ref={(e) => continueRef.current['continue'].push(e)}
                onMouseDown={(e) => {
                    checkButtonActive(e, 'continue')
                }}
                onMouseLeave={(e) => {
                    checkButtonActive(e, 'continue')
                }}
                onMouseUp={(e) => {
                    checkButtonActive(e, 'continue')
                }}
                onClick={() => {
                    handeleNavigate('continue')
                }}
            >
                CONTINUE GAME
            </div>

            <div className='pause-continue-b' 
                ref={(e) => continueRef.current['continue'].push(e)}
            > </div>

            <div className='pause-restart'
                ref={(e) => continueRef.current['restart'].push(e)}
                onMouseDown={(e) => {
                    checkButtonActive(e, 'restart')
                }}
                onMouseLeave={(e) => {
                    checkButtonActive(e, 'restart')
                }}
                onMouseUp={(e) => {
                    checkButtonActive(e, 'restart')
                }}
                onClick={() => {
                    resetStyle()
                    restart()
                    setPause(prevPause => !prevPause)
                }}
            >
                RESTART
            </div>

            <div className='pause-restart-b'
                ref={(e) => continueRef.current['restart'].push(e)}
            > </div>

            <div className='pause-quit'
                ref={(e) => continueRef.current['quit'].push(e)}
                onMouseDown={(e) => {
                    checkButtonActive(e, 'quit')
                }}
                onMouseLeave={(e) => {
                    checkButtonActive(e, 'quit')
                }}
                onMouseUp={(e) => {
                    checkButtonActive(e, 'quit')
                }}
                onClick={() => {
                    handeleNavigate('quit')
                }}
            >
                QUIT GAME
            </div>

            <div className='pause-quit-b'
                ref={(e) => continueRef.current['quit'].push(e)}
            > </div>
        </div>

        <div className='pause-menu-b'></div>
     </>   
    )
}

export default Pause;