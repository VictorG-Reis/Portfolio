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

        <div>
          <div className="knowledge-box hover-transition ">
            <img src={html} alt="css imngage" className="w-[100px]" />
          </div>
          <p className="text-white justify-center text-center text-1xl font-semibold ">HTML</p>
        </div>

        <div className="knowledge-box hover-transition">
          <img src={css} alt="css imngage" className="w-[100px]" />
        </div>
        <div className="knowledge-box hover-transition">
          <img src={javascript} alt="css imngage" className="w-[100px]" />
        </div>
        <div className="knowledge-box hover-transition">
          <img src={myslq} alt="css imngage" className="w-[100px]" />
        </div>
        <div className="knowledge-box hover-transition">
          <img src={node} alt="css imngage" className="w-[100px]" />
        </div>
        <div className="knowledge-box hover-transition">
          <img src={react} alt="css imngage" className="w-[100px]" />
        </div>
        <div className="knowledge-box hover-transition">
          <img src={redux} alt="css imngage" className="w-[100px]" />
        </div>
        <div className="knowledge-box hover-transition">
          <img src={tailwind} alt="css imngage" className="w-[100px]" />
        </div>
        <div className="knowledge-box hover-transition ">
          <img src={typescript} alt="css imngage" className="w-[100px]" />
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
