import React from 'react'
import { Grid, Image , Icon } from 'semantic-ui-react'
import Piechar from './Pie'
import Cards from './Cards'


class Admin extends React.Component {
  render () {



let count = [1,0,0,0,0,0,0,0]

 let action = count.map(x => {
        return <Cards name={x}/>


})


        return(

            <div className="FormController">
              <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                  <div className="cardsPosition">

                  <Cards/>

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
