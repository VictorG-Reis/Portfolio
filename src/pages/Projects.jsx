import React from 'react';
import costs from '../imgs/savings.svg';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const githubRepositiry = 'https://github.com/VictorG-Reis/Costs_ReactJS';

  return (
    <div className="flex items-center justify-center fullScreen bg-[#13161c] overflow-hidden">
      <div className="flex-col text-center ">
        <div className="h-[10rem] ">
          <Header
            title="Projetos"
            graus="100px"
            animaSide="X"
            durationTime="1300"
          />
        </div>

        <div className="flex items-center justify-center ">

          <ProjectCard
            projectName="Costs"
            description="Planejamento Financeiro"
            image={costs}
            bntLink={githubRepositiry}
            graus="100px"
            animaSide="X"
            durationTime="1600"
          />

        </div>
      </div>
    </div>
  );
}

export default Projects;
