import React, { useState, useEffect } from 'react';
import About from '../src/sections/About/'
import Experience from '../src/sections/Experience'
import Education from '../src/sections/Education'
import Footer from '../src/sections/Footer'
import Certification from '../src/sections/Certifications'


function App() {

  const baseURL = 'https://foradoboxprod.herokuapp.com/api';
  const [profiles, setProfile] = useState(false);

  const getProfile = async () => {
    await fetch(baseURL + "/profiles/1")
      .then(response => response.json())
      .then(data => setProfile(data));

  }
    useEffect(() => {
      getProfile()
    }, [])
 
  if (profiles === false) {
    return (          
        <div className="App">
        <header className="App-header">
          <div className="loading loading-lg"></div>
          </header>
        </div>             
    )
} else {
  return (
    <div> 
    <About aboutObj={profiles}/>
    <Experience experienceObj={profiles.experiences}/> 
    <Certification certificationObj={profiles.certifications}/>
    <Education educationObj={profiles.educations}/> 
    <Footer/>
    </div>
  );
}

}

export default App;
