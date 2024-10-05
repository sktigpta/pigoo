import './App.css'
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import React, { useState, useEffect } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  // Simulate loading time (1-2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />; // Display the loading screen
  }

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
