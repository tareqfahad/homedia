import React from 'react'
import {Card, Button, Col} from 'react-bootstrap';


const VideoCard = (props) => {
    return (
        <div>

<Col md="4">
    <Card style={{width: '18rem' }}>
    <Card.Img style={{width: '18rem', height:'18rem'}} variant="top" src={props.book.volumeInfo.imageLinks !== undefined ?  props.book.volumeInfo.imageLinks.thumbnail : props.img} alt="books"/>
    <Card.Body>
    <Card.Title>{props.book.volumeInfo.title}</Card.Title>
    </Card.Body>
</Card>
</Col>
        </div>
    )
}

export default VideoCard

