import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);
  
  const barProps = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
    config: { duration: 2000 }, // 2 segundos para a barra de loading
  });

  const circleProps = useSpring({
    to: [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(15)', opacity: 0 }, // Cresce e some
    ],
    from: { transform: 'scale(1)', opacity: 1 },
    config: { duration: 1000 },
    onRest: () => {
      if (progress === 100) {
        onComplete(); // Chama a função quando a animação termina
      }
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 5; // Incrementa o progresso
        clearInterval(timer);
        return prev;
      });
    }, 100); // Aumenta o progresso a cada 100ms

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#000000',
    }}>
      <animated.div style={{
        backgroundColor: '#7D2AE8',
        height: '10px',
        borderRadius: '5px',
        width: barProps.width,
        marginBottom: '20px',
      }} />
      <div style={{ display: 'flex' }}>
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
