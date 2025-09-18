import React from 'react'
import "./Stats.css"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from './config';

function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5,    
    });
    return (
    <section id='impact' className='stats' ref={ref}>
        <div className='stats-text'>
            <h2><span> Our Impact</span><br /><span style={{color: "#0097D7"}}> in Numbers</span></h2>
            <p>Celebrating Our Community Milestones</p>
        </div>
        <div className="main-stats">
       
            {stats.map(stat=>{
                return <div>
                    <Stat key={stat.unit} Icon = {stat.icon} number={stat.number} unit={stat.unit} inView={inView}/>
                    <div className='line'></div>
                </div>
            })}
        </div>
        
    </section>
    )
}

const Stat = ({Icon, number, unit, inView})=>{
    
    return <div id='stat' className='stat'>
        <Icon className="icon-stats"></Icon>
        <div>
        <CountUp
            start={0}
            end={inView ? number : 0}
            duration={4}
        />+
        
        <p>{unit}</p>
        </div>
    </div>
}
export default Stats