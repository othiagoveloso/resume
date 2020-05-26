import React from 'react';
import './certifications.css'



export default function Certification(props) {


  return (
   
    
    <div class="container"> 
     <h2 class="mb-5">Certifications</h2>
    <div class="filter-body columns">
    {props.certificationObj.map(certification => (
                    <div class="column col-4 filter-item" data-tag="tag-2">
                      <div class="card">
                        <div class="card-header">
                        <figure class="avatar avatar-xl">
                            <img src={certification.icon} alt="..."/>
                            </figure>
                          <div class="card-title text-bold">{certification.name}</div>
                          
                        </div>
                      </div>
                    </div>
                   ))}
                    
                  </div>
  
                  </div>

  );
}

