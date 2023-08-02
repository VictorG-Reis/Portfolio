import React from 'react';
import bgImage from '../imgs/bg.jpg';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <header
        className="fullScreen overflow-hidden flex justify-center md:justify-start"
      >
        <div
          className="flex fixed h-full w-full overflow-hidden bg-black"
        >
          <img
            src={bgImage}
            alt="background"
            className="fullScreen object-cover opacity-50 animate-[zoom_20s] "
          />
        </div>
        <div className="flex justify-center text-center align-middle flex-col m-[20rem]">
          <h1
            className=" textSetup text-[4rem] animate-[animaBanner_1s_0.5s_forwards]"
          >
            Full-stack developer & designer
          </h1>
          <p className="textSetup my-6 mx-12 text-[1.7rem] animate-[animaBanner_1s_0.8s_forwards]">Victor Gabriel</p>
          <Button name="linkdin" to="https://www.linkedin.com/in/dev-victor-gabriel-r/" />
        </div>
      </header>
    </div>
  );
}

export default Home;
