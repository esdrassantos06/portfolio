import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const WritingEffect = () => {
  return (
    <div className="typewriter  mx-0 my-auto">
      <h2 className="select-none text-4xl dark:text-white max-sm:text-3xl" translate='no'>
        <Typewriter
          words={['FrontEnd Developer']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1500}
        />
      </h2>
    </div>
  );
};

export default WritingEffect;
