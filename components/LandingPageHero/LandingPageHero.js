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
                    <Transition in={loadNavigation} timeout={400} mountOnEnter>
                        {state => {
                            return <Image src={'/logo-white.svg'} height={120} width={120} style={{
                                opacity: state === 'entered' ? 1 : 0,
                                transform: state === 'entered' ? 'translateY(0)' : 'translateY(-200px)',
                                transition: 'all ease-in 400ms',
                            }} />
                        }
                        }
                    </Transition>
                </div>
                <div className={styles.landingPageHero__innerCenter}>
                    <Transition in={loadTitle} timeout={300} mountOnEnter>
                        {state => {
                            return <h1 style={{
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
                                <ul className={styles.landingPageHero__socials} id='navList' style={{
                                    opacity: state === 'entered' ? 1 : 0,
                                    transform: state === 'entered' ? 'translateX(0)' : 'translateX(200px)',
                                    transition: 'all ease-in 500ms'
                                }}>
                                    <li className={animate.fb ? styles.animateItem : null}><a href="https://facebook.com/imraydigital" target="_blank"><Image src={'/facebook.svg'} height={30} width={30} /></a></li>
                                    <li className={animate.ig ? styles.animateItem : null}><a href="https://instagram.com/imraydigital" target="_blank"><Image src={'/instagram.svg'} height={30} width={30} /></a></li>
                                    <li className={animate.li ? styles.animateItem : null}><a href="https://www.linkedin.com/in/liam-imray-35b4688b/" target="_blank"><Image src={'/linkedin.svg'} height={30} width={30} /></a></li>
                                    <li className={animate.gh ? styles.animateItem : null}><a href="https://github.com/imraydigital" target="_blank"><Image src={'/github.svg'} height={30} width={30} /></a></li>
                                    <li className={animate.tw ? styles.animateItem : null}><a href="https://twitter.com/imraydigital" target="_blank"><Image src={'/twitter.svg'} height={35} width={35} /></a></li>
                                    <li className={animate.yt ? styles.animateItem : null}><a href="https://www.youtube.com/channel/UCeWEkoRUM29nYNHKvIlnvYQ" target="_blank"><Image src={'/youtube.svg'} height={30} width={30} /></a></li>
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