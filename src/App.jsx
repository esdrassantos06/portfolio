import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
