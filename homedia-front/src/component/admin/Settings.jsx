import React from 'react'
import { Grid , Button, Checkbox, Form , Radio, Segment } from 'semantic-ui-react'
import "./assets/adminstyle.css"
import axios from 'axios'
var jwt = require("jsonwebtoken");
class Settings extends React.Component {


state={

  newPassword:null,
  confirm:null,
  error : null,
  apistatus:null
}


  render () {




    let onsubmit = () => {


      if (this.state.newPassword === this.state.confirm) {

        axios.put(`http://localhost:62300/api/user/update/${decoded.id}`,{
          newPassword:this.state.newPassword
        }).then(response => {
          if (response.status === 200) {
              this.setState({apistatus:"Password changed"})
          }
        }).catch(err => {
          console.log(err);
        })

      }else {
              this.setState({error:"passwords don't match"})
      }





    }

let onHandlerChangePass = e => {

  this.setState({newPassword:e.target.value})

}



let onHandlerChangeConf = e => {

this.setState({confirm:e.target.value})


}


let token = localStorage.getItem('usertoken')
let decoded = jwt.decode(token)
console.log(decoded);










        return(
          <div>


          <Grid>

<Grid.Row columns={5}>
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
          <input  type='password' placeholder='New Password' name="password" onChange={onHandlerChangePass} />
        </Form.Field>

        <Form.Field>
          <label>Confirm New Password</label>
          <input  type='password' placeholder='Confirm Password' name="confirm" onChange={onHandlerChangeConf} />
        </Form.Field>



        <Button primary type='submit' onClick={onsubmit}>Submit</Button>

        <br/>

        <br/>

        <Form.Field>
          <Radio toggle label='Disble Easy Access' disabled />
        </Form.Field>
        <h1>{this.state.error}</h1>
            <h1>{this.state.apistatus}</h1>
      </Form>


      </div>

  </Grid.Column>



  <Grid.Column>

  </Grid.Column>

</Grid.Row>
</Grid>







          </div>


        )





  }
}

export default Settings;
