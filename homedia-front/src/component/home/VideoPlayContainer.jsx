// import React from 'react'
// import {Card, Button, Col} from 'react-bootstrap';

// const VideoPlayContainer = (props) => {
//     console.log(props.video)
//     return (
//         <div>
//            {props.video.title}
//         </div>
//     )
// }

// export default VideoPlayContainer
import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <div style={{"width" : "50%"}}>
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
  );
};