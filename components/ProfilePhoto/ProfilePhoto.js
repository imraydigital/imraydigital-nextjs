import React from 'react'
//CSS
import styles from './ProfilePhoto.module.css';

const ProfilePhoto = ({image}) => {
  return (
    <div className={styles.profilePhoto__container}>
        <div className={styles.profilePhoto__image} style={{
          backgroundImage: `url('/me.jpeg')`,
          backgroundSize: 'cover'
        }}>

        </div>
    </div>
  )
}

export default ProfilePhoto