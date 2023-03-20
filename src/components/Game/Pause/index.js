import { useEffect, useCallback } from 'react'

import './index.css'

const Pause = ({setPause}) => {

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

        </div>

        <div className='pause-menu-b'></div>
     </>   
    )
}

export default Pause;