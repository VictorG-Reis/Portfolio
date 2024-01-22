import React from 'react';
import costs from '../imgs/savings.svg';
import Button from '../components/Button';

function Projects() {
  return (
    <div className="flex items-center justify-center fullScreen bg-[#13161c]">
      <div className="flex-col text-center">
        <div className="h-[10rem] ">
          <h1 className="text-white text-6xl py-6 sm:text-4xl">Projetos</h1>
          <hr className="title-Bar sm:w-[80%] md:w-[50%] lg:w-[80%]" />
        </div>
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
            <Button name="Saiba mais" to="https://github.com/VictorG-Reis/Costs_ReactJS" className="project-card-button" />
          </div>
          {/*
        <div className="project-box animationBox">
          <h1>project 2</h1>
        </div>
        */}
        </div>
      </div>
    </div>

  );
}

export default Projects;
