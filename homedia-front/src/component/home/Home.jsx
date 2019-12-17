import NavBar from './NavBar'
import VideoCard from './VideoCard'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Grid } from 'semantic-ui-react'
import HorizontalScroller from 'react-horizontal-scroll-container';

import React, { Component } from 'react'


class Home extends Component {
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
                <h4><b>Videos</b></h4>
                
                <Grid>
              <Grid.Column>
              <HorizontalScroller>
                    {this.state.data !== null && this.state.data.data.items.map((bookss, i)=>{
                return <VideoCard book={bookss}/>
                                  })}
                                  </HorizontalScroller>
                                  </Grid.Column>
                                  </Grid>

  
        {/* <hr/> */}
        <h4><b>Music</b></h4>
        <Grid>
              <Grid.Column>
              <HorizontalScroller>
                    {this.state.data !== null && this.state.data.data.items.map((bookss, i)=>{
                return <VideoCard book={bookss}/>
                                  })}
                                  </HorizontalScroller>
                                  </Grid.Column>
                                  </Grid>
            </div>
        )
    }
}
export default Home