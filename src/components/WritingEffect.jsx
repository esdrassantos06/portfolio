import { Typewriter } from 'react-simple-typewriter';

const WritingEffect = () => {
  return (
    <div className="typewriter mx-0 my-auto">
      <h2 className="select-none sm:text-3xl dark:text-white text-2xl" translate='no'>
        <Typewriter
          words={['FullStack Developer']}
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
