import React from 'react'
import { Grid, Image , Icon } from 'semantic-ui-react'
import Piechar from './Pie'
import Cards from './Cards'


class Admin extends React.Component {
  render () {





        return(

            <div className="FormController">
              <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                  <div className="cardsPosition">

                <h1><Cards/></h1>

                  </div>


                </Grid.Column>
                <Grid.Column>




                  <Piechar/>


                </Grid.Column>
              </Grid>








            </div>


        )






  }
}

export default Admin;
