import { useState } from 'react';
import { Outlet } from 'react-router';
import LoadingScreen from './LoadingScreen';
 import { animated, useSpring } from '@react-spring/web';

const Layout = () => {
 const [loading, setLoading] = useState(true);
 const fadeProps = useSpring({ opacity: loading ? 0 : 1, config: { duration: 500 } });

 const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className='App'>
      {loading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        
        <animated.div style={fadeProps}>
          <Outlet />
        </animated.div>
      )}
    </div>
  );
};

export default Layout;
