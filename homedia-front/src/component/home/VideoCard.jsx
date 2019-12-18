import { Card, Image} from 'semantic-ui-react'
import React, { Component } from 'react'


const VideoCard = (props) => {
    console.log(props)
    return (
        <div>
    <Card style={{"margin":"10px"}}>
    <Card.Content>
        <Image variant="top" src={props.video.posterpath} alt="poster"/>
        <Card.Header style={{"textAlign":"center"}}>{props.video.name}</Card.Header>
        </Card.Content>
    </Card>
        </div>
    )
}


export default VideoCard

