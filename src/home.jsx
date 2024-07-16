import React, { useEffect } from 'react';
import './scripts_css/across.css';
import { initBlobs } from './scripts_css/bouncy';

const Home = () => {
  useEffect(() => {
    initBlobs();
  }, []);

  return (
    <div>
      <div className="bouncing-blobs-container">
        <div className="bouncing-blobs-glass"></div>
        <div className="bouncing-blobs">
          <div className="bouncing-blob bouncing-blob--blue"></div>
          <div className="bouncing-blob bouncing-blob--blue"></div>
          <div className="bouncing-blob bouncing-blob--blue"></div>
          <div className="bouncing-blob bouncing-blob--light-blue"></div>
          <div className="bouncing-blob bouncing-blob--purple"></div>
          <div className="bouncing-blob bouncing-blob--purple"></div>
          <div className="bouncing-blob bouncing-blob--pink"></div>
          <div className="bouncing-blob bouncing-blob--pink"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
