import React from 'react'
import {Card, Button, Col} from 'react-bootstrap';

const VideoPlayContainer = (props) => {
    console.log(props.video)
    return (
        <div>
           {props.video.title}
        </div>
    )
}

export default VideoPlayContainer

