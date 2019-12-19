import React from 'react';
import Background from '../../gh.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import NavBar from './NavBar'
import './assets/homestyle.css'
import axios from 'axios'


class MusicPlay extends React.Component {
    
state={
    music:null
}

componentDidMount(){

    axios.get(`http://localhost:62300/api/music/find/${this.props.match.params.id}`)
    .then(data => {
        console.log(data)
      this.setState({
        music:data.data.filepath
        
      })
      
    })


}

  render () {
  console.log(this.props.match.params.id);

      return (
        
<div className="musicpage">
<NavBar/>
<img  className="contImg" src={Background}/>
        <div className="musicContainer">
            
        <AudioPlayer
    autoPlay
    // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    src={this.state.music}
  />
        </div>
        </div>
        
      );

  }
}

export default MusicPlay ;
