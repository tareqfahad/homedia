import { Card, Image} from 'semantic-ui-react'
import musicLogo from '../../music.png';
import './assets/homestyle.css'
import {Link} from 'react-router-dom'
import React, { Component } from 'react'


const MusicCard = (props) => {
    console.log(props)
    return (
        <Link  to ={`/music/${props.id}`}>
        <div>
    <Card style={{"margin":"15px"}}>
    <Card.Content>
        <Image className="CardImage"  variant="top" src={musicLogo} alt="poster"/>
        <Card.Header><p className="CardHeader">{props.music.name}</p></Card.Header>
        </Card.Content>
    </Card>
        </div>
        </Link>
    )
}


export default MusicCard

