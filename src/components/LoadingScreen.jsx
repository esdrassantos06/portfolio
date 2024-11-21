import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);
  
  const barProps = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
    config: { duration: 500 },
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
    <div className="loading-screen flex flex-col items-center justify-center h-dvh bg-custom-black">
      <animated.div style={{
        backgroundColor: '#7D2AE8',
        height: '10px',
        borderRadius: '5px',
        width: barProps.width,
        marginBottom: '50px',
      }} />
    </div>
  );
};

export default LoadingScreen;
