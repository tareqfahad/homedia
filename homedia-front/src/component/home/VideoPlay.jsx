import NavBar from './NavBar'
import React, { Component } from "react";
import VideoPlayContainer from './VideoPlayContainer';
const axios = require("axios");

class VideoPlay extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    axios({
        "method":"GET",
        "url":"https://free-football-soccer-videos1.p.rapidapi.com/v1/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"free-football-soccer-videos1.p.rapidapi.com",
        "x-rapidapi-key":"0d11892cb4msha778ea6c38747b4p16530ajsn96838d1f405b"
        }
        }).then(response => {
      // console.log(response);
      this.setState({data : response})
    });
  }
  render() {
    console.log(this.state.data);
    // const video = this.state.videos;
    // console.log(video)

    return (
      <div>
        <NavBar/>
        {/* <h1>VideoPlayer</h1> */}

        {/* {this.state.data !== null && this.state.data.data.map((videoss, i)=>{
          return <VideoPlayContainer video={videoss}/>
       })} */}
       <div>
       <VideoPlayContainer/>
       </div>
     
      </div>
    );
  }
}
export default VideoPlay;