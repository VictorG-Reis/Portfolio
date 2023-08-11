/* eslint-disable max-len */
import React from 'react';

function Knowledge() {
  return (
    <div className=" fullScreen bg-[#13161c]">
      <div className="text-center font-Ubuntu text-[2rem] text-white mb-12">
        <h1>Conhecimentos</h1>
        <hr className="flex justify-center items-center text-center sm:w-[80%] md:w-[50%] lg:w-[25%] h-1 mx-auto my-0 bg-white border-none rounded-3xl" />
      </div>

      <div className="grid grid-cols-[gridTemplateColumns] grid-rows-[repeat(6, 4rem)] gap-y-[5rem] bg-[#13161c]">
        <div>
          <h2>JavaScript</h2>
          <p>Minha principal linguagem de programação, onde tenho mais conhecimento e dominío sobre, fazendo diversos projetos com a mesma.</p>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
