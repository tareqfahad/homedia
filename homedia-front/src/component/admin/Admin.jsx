import React from 'react'
import { Grid, Image } from 'semantic-ui-react'


class Admin extends React.Component {
  render () {
    console.log("This is admin");

        return(

            <div className="FormController">

                <Grid called>
              <Grid.Row>
                    <Grid.Column width={3}>

                    </Grid.Column>
                    <Grid.Column width={10}>

                      This is some talk



                    </Grid.Column>
                    <Grid.Column width={3}>

                    </Grid.Column>
                  </Grid.Row>
                </Grid>








            </div>


        )






  }
}

export default Admin;
