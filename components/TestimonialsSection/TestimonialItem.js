import React from 'react'
//CSS
import styles from './TestimonialItem.module.css'
//Components
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'

const TestimonialItem = () => {
  return (
    <div className={styles.testimonialItem}>
      <div className={styles.testimonialItem__header}>
        <div className={styles.testimonialItem__header__items}>
          <ProfilePhoto />
          <div className={styles.testimonialItem__header__items__text}>
            <h3>Liam Imray</h3>
            <h6>Imray Digital</h6>
          </div>
        </div>
      </div>
      <div className={styles.testimonialItem__desc}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel luctus lacus. Maecenas ullamcorper luctus tellus quis rutrum. Maecenas eu nibh eu libero pretium aliquet. Vivamus pharetra faucibus iaculis. Morbi bibendum, velit varius varius finibus, elit lacus tempor urna, ac.</p>
      </div>
      <div className={styles.testimonialItem__quotation}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 20 12">
          <path fill="rgba(0,0,0,0.1)" fill-rule="evenodd" d="M296 7563v8h4v4h4v-12h-8zm-12 0h8v12h-4v-4h-4v-8z" transform="translate(-284 -7563)" />
        </svg>
      </div>
    </div>
  )
}

export default TestimonialItem