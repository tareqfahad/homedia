import React from 'react';
import './assets/homestyle.css'
import { Player } from 'video-react';

export default props => {
  
  return (
    <div className="vidContainer">
    <Player
      playsInline
      poster="/assets/poster.png"
      src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
    />
    </div>
  );
};