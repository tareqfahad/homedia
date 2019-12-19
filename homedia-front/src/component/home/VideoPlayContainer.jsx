import React from 'react';
import NavBar from './NavBar'
import './assets/homestyle.css'
import { Player } from 'video-react';
import axios from 'axios'


class VideoPlayContainer extends React.Component {

state={
    video:null
}

componentDidMount(){

    axios.get(`http://localhost:62300/api/video/find/${this.props.match.params.id}`)
    .then(data => {
      this.setState({
        video:data.data.filepath
      })
    })


}

  render () {
  console.log(this.props.match.params.id);

      return (
<div>
  <NavBar/>
        <div className="vidContainer">
        <Player
          playsInline
          poster="/assets/poster.png"
          src={this.state.video}
        />
        </div>
        </div>
      );

  }
}

export default VideoPlayContainer ;
