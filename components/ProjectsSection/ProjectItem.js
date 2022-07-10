import React from 'react'
//CSS
import styles from './ProjectItem.module.css';

const ProjectItem = () => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectContainer__images}>
                <div className={styles.project__featuredImage}></div>
                <div className={styles.project__subImageContainer}>
                    <div className={styles.project__subImage}>1</div>
                    <div className={styles.project__subImage}>2</div>
                    <div className={styles.project__subImage}>3</div>
                </div>
            </div>
            <div className={styles.projectContainer__desc}>
                <p>Descriptions</p>
            </div>
        </div>
    )
}

export default ProjectItem