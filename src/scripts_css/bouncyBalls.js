import React from 'react';
import { initBlobs } from '../scripts_css/bouncyLogic';

const BouncyBalls = () => {
  React.useEffect(() => {
    initBlobs();
  }, []);

  return (
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
  );
};

export default BouncyBalls;
