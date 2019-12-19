import { Card, Image} from 'semantic-ui-react'
import './assets/homestyle.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const VideoCard = (props) => {

    return (
      <Link  to ={`/video/${props.id}`}>
        <div >
    <Card style={{"margin":"15px"}}>
    <Card.Content>
        <Image className="CardImage" variant="top" src={props.video.posterpath} alt="poster"/>
        <Card.Header ><p className="CardHeader">{props.video.name}</p></Card.Header>
        </Card.Content>
    </Card>
        </div>
        </Link>
    )
}


export default VideoCard
