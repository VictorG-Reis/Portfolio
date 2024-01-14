import React from 'react';

function Projects() {
  return (
    <div className="flex items-center justify-center fullScreen bg-[#13161c]">
      <div className="flex space-x-52 ">
        <div className="bg-slate-800 project-box shadow-[14px_14px_16px_rgba(000)]">
          <h1>project 1</h1>
        </div>
        <div className="bg-slate-800 project-box">
          <h1>project 2</h1>
        </div>
        <div className="bg-slate-800 project-box">
          <h1>project 3</h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
