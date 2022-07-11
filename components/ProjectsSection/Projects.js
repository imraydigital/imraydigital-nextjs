import React from 'react'
//CSS
import styles from './Projects.module.css';
//Components
import ProjectItem from './ProjectItem';
import Button from '../Button/Button';
//Methods


const Projects = () => {

  return (
    <section className={styles.projectsContainer} id='main'>
      <h1>Recent Projects.</h1>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <Button text='View More Projects' style='primary' />
    </section>
  )
}

export default Projects