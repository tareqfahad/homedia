import React from 'react'
import { Grid, Image , Icon  , Card} from 'semantic-ui-react'
import Piechar from './Pie'
import Cards from './Cards'
import {checkAuth} from './Auth'
import { withRouter } from 'react-router-dom';
import axios from 'axios'



class Admin extends React.Component {

state={
  data:[],
  movie:"Hello"
}


componentDidMount(){

Promise.all([

  axios.get('http://localhost:62300/api/show/video'),
  axios.get('http://localhost:62300/api/show/music')

]).then(data => {
    this.setState({data:data})
}).catch(err => {
  console.log(err);
})

}

cards = this.state.data.map(e => {

      console.log(this.state.data[2]);


})






  render ()
  {
    checkAuth(this.props)





        return(

            <div className="FormController">


          <Grid columns={3} padded='vertically'>
            <Grid.Column>

            </Grid.Column>
            <Grid.Column>

              <Card.Group>

                <Cards name={this.state.movie}/>


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
