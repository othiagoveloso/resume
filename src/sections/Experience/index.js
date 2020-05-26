import React from 'react';
import './experience.css'


export default function Experience(props) {

  return (
     <div class="container"> 
     <div class="timeline">    
        <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">           
            <div class="w-100">
                <h2 class="mb-5">Experience</h2>
                {props.experienceObj.map(experience => (
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content">
                    <h3 class="mb-0">{experience.title}</h3>
                    <div class="subheading mb-3">{experience.company}</div>
                    <p>{experience.description}</p>
                    <p>
                    <ul class="list-inline dev-icons">
                    {experience.skills.map(skills => (    
                    <li class="list-inline-item">
                        <i class={skills.icon}></i>
                    </li>
                    ))} 
                    </ul>
                    </p>
                </div>               
                <div class="resume-date text-md-right">
                    <span class="text-primary">{experience.date}</span>
                </div>
                </div>
            ))} 
            </div>
            </section>   
    </div>
    </div>  
  
  );
}

