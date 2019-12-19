import NavBar from './NavBar'
import MusicCard from './MusicCard'
import React, { Component } from 'react'
import axios from 'axios'


export default class AllMusic extends Component {


    state={music:null}


    componentDidMount(){

     
        axios.get('http://localhost:62300/api/show/music')
        .then(data2 => {
            console.log(data2)
          this.setState({music:data2.data})
        });
          
        
    }




    render() {
        return (
            <div>
                <NavBar/>
            
                {this.state.music !== null && this.state.music.map((cards, i)=>{
                return <MusicCard {...this.props} music={cards} id={cards._id}/>
              })}

              




            </div>
        )
    }
}
