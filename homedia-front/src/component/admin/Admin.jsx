import React from 'react'
import { Grid, Image , Icon  , Card} from 'semantic-ui-react'
import Piechar from './Pie'
import Cards from './Cards'
import {checkAuth} from './Auth'
import { withRouter } from 'react-router-dom';
import axios from 'axios'



class Admin extends React.Component {

state={
  data:null,
  movie:"Hello"
}

componentDidMount(){

  axios.get('http://localhost:62300/api/video')
  .then(response => {
    this.setState({data:response.data})
  })



}





  render ()
  {
    checkAuth(this.props)

console.log(this.state.data);



        return(

            <div className="FormController">


          <Grid columns={3} padded='vertically'>
            <Grid.Column>

            </Grid.Column>
            <Grid.Column>

              <Card.Group>
                {this.state.data !== null && this.state.data.videos.map((e)=>{
                return  <Cards video={e} />
                })}



            </Card.Group>
            </Grid.Column>
            <Grid.Column>
              <Piechar/>
            </Grid.Column>
          </Grid>








            </div>


        )






  }
}

export default withRouter(Admin)
