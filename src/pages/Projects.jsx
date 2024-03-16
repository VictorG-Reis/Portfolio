import React from 'react';
import costs from '../imgs/savings.svg';
import toDoList from '../imgs/toDoList.jpeg';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const githubRepositiry = 'https://github.com/VictorG-Reis/Costs_ReactJS';

  const ToDoListWebSite = 'https://interface-todo-list.vercel.app/';
  const ToDoListGithub = 'https://github.com/VictorG-Reis/interface-todoList';

  return (
    <div className="flex items-center justify-center fullScreen bg-[#13161c] overflow-hidden ">

      <div className=" text-center w-[70%] flex flex-col justify-center items-center">
        <div className="h-[10rem] text-center ">
          <Header
            title="Projetos"
            graus="100px"
            animaSide="X"
            durationTime="1300"
          />
        </div>

        <div className="flex items-center justify-around w-[100%] flex-col lg:flex-row ">

          <ProjectCard
            projectName="Costs"
            description="Planejamento Financeiro"
            image={costs}
            GitHubLink={githubRepositiry}
            WebSiteLink="#"
            graus="100px"
            animaSide="X"
            durationTime="1600"
          />

          <ProjectCard
            projectName="To do list"
            description="Monte uma lista de afazeres"
            image={toDoList}
            GitHubLink={ToDoListGithub}
            WebSiteLink={ToDoListWebSite}
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
