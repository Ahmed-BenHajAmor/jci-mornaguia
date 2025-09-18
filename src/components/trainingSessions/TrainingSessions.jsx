import React from 'react'
import { SectionHeader } from '../sectionHeader'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {trainingSessions} from './config';
import "./TrainingSessions.css"

function TrainingSessions() {
  return (
    <section id='training-sessions' className="training-section">
      <SectionHeader title={"Our training sessions"} description={"Hands-on learning experiences to help young leaders grow"}/>
      <div className="training-cards">
        {trainingSessions.map(session => {
          return <TrainingCard key={session.id} description={session.description} title={session.title} image={session.image} />
        })}
      
      </div>
    </section>
  )
}


const TrainingCard = ({title,description, image})=>{
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
export default TrainingSessions