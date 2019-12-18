import { Card, Image} from 'semantic-ui-react'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const VideoCard = (props) => {

    return (
      <Link  to ={`/video/${props.id}`}>
        <div >
    <Card style={{"margin":"10px"}}>
    <Card.Content>
        <Image variant="top" src={props.video.posterpath} alt="poster"/>
        <Card.Header style={{"textAlign":"center"}}>{props.video.name}</Card.Header>
        </Card.Content>
    </Card>
        </div>
        </Link>
    )
}


export default VideoCard
