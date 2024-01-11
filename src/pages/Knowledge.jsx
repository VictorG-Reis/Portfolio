/* eslint-disable max-len */
import React from 'react';
import css from '../imgs/icons8-css.svg';
import html from '../imgs/icons8-html.svg';
import javascript from '../imgs/icons8-javascript.svg';
import myslq from '../imgs/icons8-mysql-logo.svg';
import node from '../imgs/icons8-node-js.svg';
import react from '../imgs/icons8-react.svg';
import tailwind from '../imgs/icons8-tailwind-css.svg';
import typescript from '../imgs/icons8-typescript.svg';
import redux from '../imgs/icons8-redux.svg';

function Knowledge() {
  return (
    <div className=" w-full h-[70%] bg-[#13161c] ">
      <div className="text-center font-Ubuntu text-[2rem] text-white mb-[7rem] pt-[2rem]">
        <h1 className="text-6xl py-6 sm:text-4xl">Conhecimentos</h1>
        <hr className="flex justify-center items-center text-center sm:w-[80%] md:w-[50%] lg:w-[25%] h-1 mx-auto my-0 bg-white border-none rounded-3xl" />
      </div>

      <div className="flex w-[50%] justify-center items-center my-auto mx-auto flex-wrap ">

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={html} alt="html" className="w-[100px]" />
          </div>
          <p className="hover-text">HTML</p>
        </div>

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={css} alt="css" className="w-[100px]" />
          </div>
          <p className="hover-text">CSS</p>
        </div>

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={javascript} alt="javascript" className="w-[100px]" />
          </div>
          <p className="hover-text">JavaScript</p>
        </div>

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={myslq} alt="sql" className="w-[100px]" />
          </div>
          <p className="hover-text">SQL</p>
        </div>

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={node} alt="nodeJs" className="w-[100px]" />
          </div>
          <p className="hover-text">NodeJS</p>
        </div>

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={react} alt="React" className="w-[100px]" />
          </div>
          <p className="hover-text">ReactJS</p>
        </div>

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={redux} alt="Redux" className="w-[100px]" />
          </div>
          <p className="hover-text">Redux</p>
        </div>

        <div className="hover-transition">
          <div className="knowledge-box">
            <img src={tailwind} alt="tailwind" className="w-[100px]" />
          </div>
          <p className="hover-text">Tailwind</p>
        </div>

        <div className="hover-transition ">
          <div className="knowledge-box">
            <img src={typescript} alt="typeScript" className="w-[100px]" />
          </div>
          <p className="hover-text">TypeScript</p>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
