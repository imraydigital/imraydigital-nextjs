import React from 'react'
//CSS
import styles from './Navigation.module.css';
//Components

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
        <nav>
           <div className={styles.navItems}>
             <ul>
               <li>Home</li>
               <li>Projects</li>
               <li>Get a Quote</li>
             </ul>
           </div>
        </nav>
    </div>
  )
}

export default Navigation