import React from 'react'
import axios from 'axios'
import { Grid , Form , Button } from 'semantic-ui-react'


class Editpost extends React.Component {
  render () {


        return(
            <div className="FormController">
            <Grid columns='equal'>
                <Grid.Column>

            </Grid.Column>
<Grid.Column width={8}>

  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>



    <Button type='submit'>Submit</Button>
  </Form>


</Grid.Column>
<Grid.Column>

</Grid.Column>
</Grid>
</div>

        )

  }
}

export default Editpost;
