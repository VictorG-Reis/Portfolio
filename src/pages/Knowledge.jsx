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
import java from '../imgs/icons8-logo-java-coffee-cup.svg';

import KnowledgeBox from '../components/knowlegdeBox';
import Header from '../components/Header';

function Knowledge() {
  return (
    <div className=" w-full h-[70%] bg-[#13161c] overflow-hidden ">
      <div className="flex-col text-center p-10 ">
        <div className="h-[10rem] flex justify-center items-center ">
          <Header
            title="Conhecimentos"
            graus="-100px"
            animaSide="X"
            durationTime="200"
          />
        </div>

        <div className="flex lg:w-[50%] sm:w[100%] justify-center items-center my-auto mx-auto flex-wrap ">

          <KnowledgeBox image={html} text="HTML" graus="-100px" animaSide="X" durationTime="500" />
          <KnowledgeBox image={css} text="CSS" graus="-100px" animaSide="X" durationTime="550" />
          <KnowledgeBox
            image={javascript}
            text="JavaScript"
            graus="-100px"
            animaSide="X"
            durationTime="600"
          />
          <KnowledgeBox
            image={myslq}
            text="SQL"
            graus="-100px"
            animaSide="X"
            durationTime="650"
          />
          <KnowledgeBox image={node} text="NodeJs" graus="-100px" animaSide="X" durationTime="700" />
          <KnowledgeBox image={react} text="ReactJS" graus="-100px" animaSide="X" durationTime="750" />
          <KnowledgeBox image={redux} text="Redux" graus="-100px" animaSide="X" durationTime="800" />
          <KnowledgeBox image={tailwind} text="Tailwind" graus="-100px" animaSide="X" durationTime="850" />
          <KnowledgeBox image={typescript} text="Typescript" graus="-100px" animaSide="X" durationTime="900" />
          <KnowledgeBox image={java} text="Java" graus="-100px" animaSide="X" durationTime="950" />
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
