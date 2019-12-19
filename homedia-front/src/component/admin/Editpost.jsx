import React from 'react'
import axios from 'axios'
import { Grid , Form , Button } from 'semantic-ui-react'


class Editpost extends React.Component {

state={
  name:null
}

  componentDidMount(){

      axios.get(`http://localhost:62300/api/video/find/${this.props.match.params.id}`)
      .then(data => {
        this.setState({
          name:data.data.name
        })
      })


  }

onHandlerChange = e =>{
  this.setState({
    name:e.target.value
  })
}

onSubmit = e => {

axios.put(`http://localhost:62300/api/video/update/${this.props.match.params.id}`,{
  name:this.state.name
})


}


  render () {

console.log(this.props.match.params.id);






        return(
            <div className="FormController">
            <Grid columns='equal'>
                <Grid.Column>

            </Grid.Column>
<Grid.Column width={8}>

  <Form>
    <Form.Field>
      <label>Change name</label>
      <input placeholder={this.state.name} onChange={this.onHandlerChange} />
    </Form.Field>



    <Button type='submit' onClick={this.onSubmit}>Submit</Button>
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
