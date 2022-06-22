import React, { useEffect, useState } from 'react'
//CSS
import styles from './PopupBar.module.css';
//Packages
import { Transition } from 'react-transition-group';


const PopupBar = () => {

    const [showPopupBar, setShowPopupBar] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setShowPopupBar(true)
        }, 6500)
    }, [])

    return (
        <Transition in={showPopupBar} timeout={200} mountOnEnter unmountOnExit>
            {state => {
                return (
                    <div className={styles.popupBarContainer} style={{
                        transform: state === 'entering' ? 'translateX(-100%)' : state === 'entered' ? 'translateX(0)' : state === 'exiting' ? 'translateX(100%)' : 'translateX(100%)',
                        transition: 'all ease-in 200ms'
                    }}>
                        <div className={styles.popupBarContainer__text}>
                            <h3>Ready to get started on your website?</h3>
                            <button>Let's Chat!</button>
                        </div>
                        <button onClick={() => setShowPopupBar(false)}>X</button>
                    </div>
                )
            }}
        </Transition>
    )
}

export default PopupBar