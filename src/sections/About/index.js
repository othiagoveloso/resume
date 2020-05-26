import React from 'react';
import './about.css'


export default function About(props) {

        return (
            <div> 
            <div class="container">
            <div class="jumbotron mt-3 text-right">
            <span class="text-left">
                <img class='invert' src={props.aboutObj.image}></img>
            </span>
                <h1>{props.aboutObj.name}</h1>
                <p class="lead">{props.aboutObj.short_description}</p>
                <ul class="list-inline dev-icons">
                {props.aboutObj.socials.map(social =>(
                    <li class="list-inline-item">
                    <a href={social.link} target="_blank"> <i class={social.icon}></i> </a>
                    </li>
                ))}   
                </ul>             
            </div>           
            </div>
            <div class="container">
            <h2 class="mt-5">...</h2>
            <p class="lead">{props.aboutObj.description}</p>
             </div>
                            
              
           
            </div>

  );
  } 


