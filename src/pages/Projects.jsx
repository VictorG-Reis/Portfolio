import React from 'react';
import costs from '../imgs/savings.svg';
import toDoList from '../imgs/toDoList.svg';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const githubRepositiry = 'https://github.com/VictorG-Reis/Costs_ReactJS';

  const ToDoListWebSite = 'https://interface-todo-list.vercel.app/';
  const ToDoListGithub = 'https://github.com/VictorG-Reis/interface-todoList';

  return (
    <div className="flex items-center justify-center h-full w-full bg-[#13161c] overflow-hidden ">

      <div className=" text-center w-[70%] h-full flex flex-col justify-center items-center">
        <div className="h-[10rem] text-center ">
          <Header
            title="Projetos"
            graus="100px"
            animaSide="X"
            durationTime="1300"
          />
        </div>

        <div className="flex items-center justify-around lg:w-[100%] lg:h-full md:h-[30rem] flex-col lg:flex-row md:flex-row">

          <ProjectCard
            projectName="Costs"
            description="Planejamento Financeiro"
            image={costs}
            GitHubLink={githubRepositiry}
            WebSiteLink="#"
            graus="100px"
            animaSide="X"
            durationTime="1000"
          />

          <ProjectCard
            projectName="To do list"
            description="Monte uma lista de afazeres"
            image={toDoList}
            GitHubLink={ToDoListGithub}
            WebSiteLink={ToDoListWebSite}
            graus="100px"
            animaSide="X"
            durationTime="1050"
          />

        </div>
      </div>
    </div>
  );
}

export default Projects;
