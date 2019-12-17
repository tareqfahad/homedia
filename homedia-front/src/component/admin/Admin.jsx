import React from 'react'
import { Grid, Image , Icon  , Card} from 'semantic-ui-react'
import Piechar from './Pie'
import Cards from './Cards'
import {checkAuth} from './Auth'
import { withRouter } from 'react-router-dom';




class Admin extends React.Component {
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

                <Cards/>


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
