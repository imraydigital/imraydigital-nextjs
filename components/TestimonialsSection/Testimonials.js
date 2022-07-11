import React from 'react'
//CSS
import styles from './Testimonials.module.css';
//Components
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection__wrapper} id='testimonials'>
      <h1>Our clients are always happy! &#128525;</h1>
      <div className={styles.testimonialsSection}>
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
      </div>
    </section>
  )
}

export default Testimonials