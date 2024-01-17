import React from 'react';
import costs from '../imgs/savings.svg';

function Projects() {
  return (
    <div className="flex items-center justify-center fullScreen bg-[#13161c]">
      <div className="flex space-x-52 ">
        <div className=" project-box animationBox">
          <img src={costs} alt="costs project" className="w-[100%] h-[70%]" />
          <h1 className="h-[10%] text-center text-3xl title-Project drop-shadow-sm">costs</h1>
          <h2 className="
          h-[10%]
          text-center
          text-xl
          subtitle-Project
          drop-shadow-sm
          "
          >
            planejamento financeiro
          </h2>
          <button className="project-card-button " type="button">saiba mais</button>
        </div>
        <div className="project-box animationBox">
          <h1>project 2</h1>
        </div>
      </div>
    </div>

  );
}

export default Projects;
