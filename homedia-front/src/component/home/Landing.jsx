import NavBar from './NavBar'
import {Row} from 'react-bootstrap';
import VideoCard from './VideoCard'
import axios from 'axios'

import React, { Component } from 'react'

export default class Landing extends Component {
    constructor(props) {
        super();
        this.state = {
          data: null
        };
      }
      componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://www.googleapis.com/books/v1/volumes?q=$music",
            }).then(response => {
          console.log(response);
          this.setState({data : response})
        });
      }


    render() {
        return (
            <div>
                <NavBar/>
                this is landing page
                {/* <VideoCard/> */}
                <Row style={{marginLeft: "68px"}}>
       {this.state.data !== null && this.state.data.data.items.map((bookss, i)=>{
          return <VideoCard book={bookss}/>
       })}
        </Row>
            </div>
        )
    }
}
