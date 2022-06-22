import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Home.module.css'
//Components
import Header from '../components/Header'
import LandingPageHero from '../components/LandingPageHero/LandingPageHero'
import ProjectsSection from '../components/ProjectsSection/Projects';
import Svg from '../components/LandingPageSVG/LandingPageSVG';
import PopupBar from '../components/PopupBar/PopupBar';

export default function Home() {

  if (typeof window !== "undefined") {
    window.scrollTo(0,0)
  }

  return (
    <div className={styles.container}>
      <Header/>
      <PopupBar />
      <LandingPageHero />
      <Svg />
      <main id='main' className={styles.main}>
          <section className={styles.main__Container}>
            <ProjectsSection />
          </section>
      </main>
    </div>
  )
}