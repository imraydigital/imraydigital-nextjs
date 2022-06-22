import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//CSS
import styles from './LandingPageHero.module.css'
//Packages
import { Transition } from 'react-transition-group'
//Components
//Methods
import wait from '../../methods/wait';

const LandingPageHero = () => {

    const [loadTitle, setLoadTitle] = useState(false)
    const [loadNavigation, setLoadNavigation] = useState(false)
    const [showSubtitle, setShowSubtitle] = useState(false)
    const [animate, setAnimate] = useState({
        fb: false,
        ig: false,
        li: false,
        gh: false,
        tw: false,
        yt: false
    })

    // Create async loop
    const setAnimation = async () => {
        for (const prop in animate) {
            setAnimate(prevState => {
                return {
                    ...prevState,
                    [prop]: true
                }
            })
            await wait(180)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoadTitle(true)
        }, 100);

        setTimeout(() => {
            setLoadNavigation(true)
        }, 500)

        setTimeout(() => {
            //Call animation
            setAnimation();
            //Show subtitle
            setShowSubtitle(true)
        }, 1500)
    }, [])

    const scrollToProjects = () => {
        document.getElementById('main').scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
          })
    }

    return (
        <div className={styles.landingPageHero__container}>
            <div className={styles.landingPageHero__inner}>
                <div className={styles.landingPageHero__innerLeft}>
                    <Transition in={loadNavigation} timeout={300} mountOnEnter>
                        {state => {
                            return <Image src={'/logo-white.svg'} height={120} width={120} style={{
                                opacity: state === 'entered' ? 1 : 0,
                                transform: state === 'entered' ? 'translateY(0)' : 'translateY(-200px)',
                                transition: 'all ease-in 300ms',
                            }} />
                        }
                        }
                    </Transition>
                </div>
                <div className={styles.landingPageHero__innerCenter}>
                    <Transition in={loadTitle} timeout={300} mountOnEnter>
                        {state => {
                            return <h1 style={{
                                color: '#FFF',
                                fontSize: 120,
                                opacity: state === 'entered' ? 1 : 0,
                                transform: state === 'entered' ? 'translateX(0)' : 'translateX(-500px)',
                                transition: 'all ease-in 300ms'
                            }} id='heroTitle'>Hello.</h1>
                        }}
                    </Transition>
                    <Transition in={showSubtitle} timeout={500} mountOnEnter>
                        {state => {
                            return <div className={styles.subtitleContainer} style={{
                                opacity: state === 'entered' ? 1 : 0,
                                transition: 'all ease-in 200ms',
                                cursor: 'pointer'
                            }} onClick={()=>scrollToProjects()}>
                                <h4>View Our Projects</h4>
                                <Image src={'/arrow.svg'} height={20} width={20} />
                            </div>
                        }}
                    </Transition>
                </div>
                <div className={styles.landingPageHero__innerRight}>
                    <Transition in={loadNavigation} timeout={500} mountOnEnter>
                        {state => {
                            return (
                                <ul className={styles.landingPageHero__navigation} id='navList' style={{
                                    opacity: state === 'entered' ? 1 : 0,
                                    transform: state === 'entered' ? 'translateX(0)' : 'translateX(200px)',
                                    transition: 'all ease-in 500ms'
                                }}>
                                    <li className={animate.fb ? styles.animateItem : null}><Image src={'/facebook.svg'} height={30} width={30} /></li>
                                    <li className={animate.ig ? styles.animateItem : null}><Image src={'/instagram.svg'} height={30} width={30} /></li>
                                    <li className={animate.li ? styles.animateItem : null}><Image src={'/linkedin.svg'} height={30} width={30} /></li>
                                    <li className={animate.gh ? styles.animateItem : null}><Image src={'/github.svg'} height={30} width={30} /></li>
                                    <li className={animate.tw ? styles.animateItem : null}><Image src={'/twitter.svg'} height={35} width={35} /></li>
                                    <li className={animate.yt ? styles.animateItem : null}><Image src={'/youtube.svg'} height={30} width={30} /></li>
                                </ul>
                            )
                        }
                        }
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default LandingPageHero