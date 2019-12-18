import HorizontalScroller from 'react-horizontal-scroll-container';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import React from 'react'


const VideoCard = (props) => {
    return (
        <div style={{"margin":"5px"}}>
    <Card >
        <Image variant="top" src={props.book.volumeInfo.imageLinks !== undefined ?  props.book.volumeInfo.imageLinks.thumbnail : props.img} alt="books"/>
        <Card.Content>
            <Card.Header>{props.book.volumeInfo.title}</Card.Header>
        </Card.Content>
    </Card>
        </div>
    )
}

export default VideoCard

