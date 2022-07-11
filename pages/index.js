import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
//Components
import Header from '../components/Header'
import LandingPageHero from '../components/LandingPageHero/LandingPageHero'
import ProjectsSection from '../components/ProjectsSection/Projects';
import Svg from '../components/LandingPageSVG/LandingPageSVG';
import PopupBar from '../components/PopupBar/PopupBar';
import TestimonialsSVG from '../components/TestimonialsSVG/TestimonialsSVG';
import Testimonials from '../components/TestimonialsSection/Testimonials';

export default function Home() {

  if (typeof window !== "undefined") {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.container}>
      <Header />
      <PopupBar />
      <LandingPageHero />
      <Svg />
      <ProjectsSection />
      <TestimonialsSVG/>
      <Testimonials />
    </div>
  )
}