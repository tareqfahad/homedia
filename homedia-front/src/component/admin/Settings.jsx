import React from 'react'
import { Grid , Button, Checkbox, Form , Radio, Segment } from 'semantic-ui-react'
import "./assets/adminstyle.css"

class Sttings extends React.Component {
  render () {


    let submit = () => {
      console.log("it's work");
    }



        return(

          <div>


          <Grid>

<Grid.Row columns={6}>
  <Grid.Column>

  </Grid.Column>

  <Grid.Column>

  </Grid.Column>



  <Grid.Column>



  </Grid.Column>

  <Grid.Column>



<div className="FormController">

  <Form>
      <Form.Field>
        <label>Current Password</label>
        <input placeholder='Current Password' type='password' />
      </Form.Field>

<hr/>

      <Form.Field>
        <label>New Password</label>
        <input  type='password' placeholder='New Password' />
      </Form.Field>

      <Form.Field>
        <label>Confirm New Password</label>
        <input  type='password' placeholder='Confirm Password' />
      </Form.Field>



      <Button primary type='submit' onClick={submit}>Submit</Button>

      <br/>
      <br/>

      <Form.Field>
        <Radio toggle label='Disble Easy Access' disabled />
      </Form.Field>

    </Form>



</div>






  </Grid.Column>

  <Grid.Column>

  </Grid.Column>

  <Grid.Column>

  </Grid.Column>
</Grid.Row>
</Grid>







          </div>


        )





  }
}

export default Sttings;
