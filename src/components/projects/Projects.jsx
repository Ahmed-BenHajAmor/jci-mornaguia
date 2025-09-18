import React from 'react'
import { SectionHeader } from '../sectionHeader'
import { projects } from './config'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Projects.css"
function Projects() {
  return (
    <section id='events' className="projects">
      <SectionHeader title={"Our events"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit"}/>
      <div className="projects-cards">
        {projects.map(project =>{
          return <ProjectCard title={project.name} description={project.description} image={project.image} key={project.id}/>
        })}
      </div>
    </section>
  )
}

const ProjectCard = ({title, description, image})=>{
  return (
    <div className="training-card">
      <div className='image-container'>
        <img src={image} alt="sponsor" />
      </div>
      <div className="training-card-description">
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
        <a href="#">more details <ArrowRightAltIcon style={{fontSize: "23px"}}/></a>
      </div>
    </div>
  )
}

export default Projects