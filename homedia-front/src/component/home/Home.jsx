import NavBar from './NavBar'
import VideoCard from './VideoCard'
import MusicCard from './MusicCard'
import axios from 'axios'
import './assets/homestyle.css'
import ReactDOM from 'react-dom';
import { Grid } from 'semantic-ui-react'
import HorizontalScroller from 'react-horizontal-scroll-container';

import React, { Component } from 'react'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      music: null
    };
  }
  componentDidMount() {
    axios.get('http://localhost:62300/api/video')
    .then(data => {
    
      this.setState({video:data.data})
    });
    axios.get('http://localhost:62300/api/show/music')
    .then(data2 => {
        console.log(data2)
      this.setState({music:data2.data})
    });
  }

    render() {
      console.log(this.state.music)
      console.log(this.state.video)
        return (
            <div>
              <NavBar/>
                <br/>
                <h2 className="titles"><b>Videos</b></h2>
                <Grid>
              <Grid.Column>
                <HorizontalScroller sensibility={3}>

                {this.state.video !== null && this.state.video.videos.map((cards, i)=>{
                return  <VideoCard {...this.props} video={cards} id={cards._id}/>

              })}


                </HorizontalScroller>
                </Grid.Column>
                </Grid>
            <div>
              <br/>
        <h2 className="titles"><b>Music</b></h2>
        <Grid>
              <Grid.Column>
                <HorizontalScroller sensibility={3}>

                {this.state.music !== null && this.state.music.map((cards, i)=>{
                return <MusicCard {...this.props} music={cards} id={cards._id}/>
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
