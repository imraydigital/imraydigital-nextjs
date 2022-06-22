import React from 'react'
//CSS
import styles from './Card.module.css';

const Card = ({type, title, desc, clickable}) => {
  return (
    <div className={styles.cardContainer} style={{cursor: clickable && 'pointer'}}>
       <h3>{title}</h3>
       <p>{desc}</p>
       <div className={styles.cardContainer__footer}>
          <p>{type === 'blog' && 'Read More'}</p>
       </div>
    </div>
  )
}

export default Card