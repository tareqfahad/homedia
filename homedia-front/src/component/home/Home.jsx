import NavBar from './NavBar'
import VideoCard from './VideoCard'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Grid } from 'semantic-ui-react'
import HorizontalScroller from 'react-horizontal-scroll-container';

import React, { Component } from 'react'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
    };
  }
  componentDidMount() {
    axios.get('http://localhost:62300/api/video')
    .then(data => {
        console.log(data)
      this.setState({video:data.data})
    });
  }

    render() {
      console.log(this.state.video)
        return (
            <div>
              <NavBar/>
                <br/>
                <h4><b>Videos</b></h4>
                <Grid>
              <Grid.Column>
                <HorizontalScroller sensibility={3}>
                 
                {this.state.video !== null && this.state.video.videos.map((cards, i)=>{
                return <VideoCard video={cards}/>
              })}
                </HorizontalScroller>
                </Grid.Column>
                </Grid> 
            <div>
              <br/>
              <br/>
        <h4><b>Music</b></h4>
        <Grid>
              <Grid.Column>
                <HorizontalScroller sensibility={3}>
                 
                {this.state.video !== null && this.state.video.videos.map((cards, i)=>{
                return <VideoCard video={cards}/>
              })}
                </HorizontalScroller>
                </Grid.Column>
                </Grid> 
             </div>
            </div>
        )
    }
}
export default Home