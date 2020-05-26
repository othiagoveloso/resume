import React from 'react';


export default function Education(props) {

  return (
    <div class="container"> 
    <div class="timeline">    
       <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">           
           <div class="w-100">
               <h2 class="mb-5">Education</h2>
               {props.educationObj.map(education => (
               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div class="resume-content">
                   <h3 class="mb-0">{education.short_description}</h3>
                   <div class="subheading mb-3"></div>
                   <p>{education.name}</p>
                   <p>
                   </p>
               </div>               
               </div>
           ))} 
           </div>
           </section>   
   </div>
   </div>  
   
  
  );
}

