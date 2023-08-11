import React from 'react';
import bgImage from '../imgs/bg.jpg';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <header
        className="fullScreen overflow: flex justify-center items-center"
      >
        <div
          className="h-full w-full overflow-hidden bg-black"
        >
          <img
            src={bgImage}
            alt="background"
            className="fullScreen object-cover opacity-50 animate-[zoom_20s] "
          />
        </div>
        <div className="flex absolute justify-center text-center items-center flex-col my-[20rem] mx-auto">
          <h1
            className=" textSetup lg:text-[5rem] sm:text-[3.4rem]  animate-[animaBanner_1s_0.5s_forwards]"
          >
            Full-stack developer & designer
          </h1>
          <p className="textSetup my-6 mx-12 lg:text-[1.8rem] sm:text-[1.5rem] animate-[animaBanner_1s_0.8s_forwards]">Victor Gabriel</p>
          <Button name="linkedin" to="https://www.linkedin.com/in/dev-victor-gabriel-r/" />
        </div>
      </header>
    </div>
  );
}

export default Home;
