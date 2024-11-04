import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);
  
  const barProps = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
    config: { duration: 3000 },
  });

  const circleProps = useSpring({
    to: [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(15)', opacity: 0 },
    ],
    from: { transform: 'scale(1)', opacity: 1 },
    config: { duration: 1000 },
    onRest: () => {
      if (progress === 100) {
        onComplete();
      }
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 5;
        clearInterval(timer);
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen flex flex-col items-center justify-center h-screen bg-custom-black">
      <animated.div style={{
        backgroundColor: '#7D2AE8',
        height: '10px',
        borderRadius: '5px',
        width: barProps.width,
        marginBottom: '50px',
      }} />
      <div  className='flex gap-3'>
        <animated.div
          style={{
            ...circleProps,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#7D2AE8',
            margin: '0 10px',
          }}
        />
        <animated.div
          style={{
            ...circleProps,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#8538E8',
            margin: '0 10px',
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
