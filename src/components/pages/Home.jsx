import React from "react";
import bgImage from '../imgs/bg.jpg'

function Home() {
  return(
    <header>
      <div>
        <img src={bgImage} alt="background" />       
      </div>
      <div className="info">
        <h1>Full-stack developer & designer</h1>
        <p>Victor Gabriel</p>
      </div>
    </header>
  )
}

export default Home