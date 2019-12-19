import NavBar from './NavBar'
import axios from 'axios'
import React, { Component } from 'react'
import VideoCard from './VideoCard'


export default class AllMusic extends Component {


    state={
        video:null
    }
    componentDidMount() {
        axios.get('http://localhost:62300/api/video')
        .then(data => {
        
          this.setState({video:data.data})
        });
      }



    render() {
        return (
            <div>
                <NavBar/>
                


                {this.state.video !== null && this.state.video.videos.map((cards, i)=>{
                return  <VideoCard {...this.props} video={cards} id={cards._id}/>

              })}




            </div>
        )
    }
}
