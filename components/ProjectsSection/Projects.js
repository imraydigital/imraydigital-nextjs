import React from 'react'
//CSS
import styles from './Projects.module.css';
//Components
import Card from '../Card/Card';
import ProjectItem from './ProjectItem';
//Methods
// Dummy Data
import blogPosts from '../../data/blogPosts';

const Projects = () => {

  return (
    <section className={styles.projectsContainer}>
        <h1>Recent Projects.</h1>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <button>View more projects</button>
    </section>
  )
}

export default Projects