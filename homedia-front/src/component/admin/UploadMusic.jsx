import React from 'react'
import { Grid, Segment , Form , Button } from 'semantic-ui-react'
import axios from 'axios'


class UploadMusic extends React.Component {


state={

  name:null,
  musicpath:null,
  apistatus:null


}
 onChangeHandlerName = ({target:{name , value}}) => {
// console.log(value);
    this.setState({
      name:value
    })
    // console.log(this.state.name);


}
 submitHondler = e => {

    axios.post('http://localhost:62300/api/music/new',{

      name:this.state.name,
      filepath:this.state.musicpath


    })
      .then(data => {
        if (data.status === 200) {

            this.setState({apistatus:"Files uploaded successfully"})


        }
      }).catch(err => {
        this.setState({apistatus:"Somthing wrong"})
      })

}

 onChangeHandlerMusic = e => {

  let music = e.target.files
  let reader = new FileReader()
  reader.readAsDataURL(music[0])

  reader.onload =(e)=>{
    this.setState({
      musicpath:e.target.result
    })
  }
  console.log(this.state.musicpath);

}


  render () {

















          return(


              <div>


                <div>

                  <Grid columns='equal'>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column width={8}>
                <Segment>


                        <div className="CenterForm">
                                  <Form>
                                      <Form.Field>
                                        <label>Playlist</label>
                                        <input placeholder='Name' name="name" type='field' onChange={this.onChangeHandlerName} />
                                      </Form.Field>

                                      <Form.Field>

                                      <label>Upload Music</label>

                                         <input
                                           accept="audio/*"
                                           type="file"
                                           name="files"
                                           onChange={this.onChangeHandlerMusic}

                                         />



                     </Form.Field>


                  <Button primary type='submit' onClick={this.submitHondler} >Submit</Button>
                  <h1>{this.state.apistatus}</h1>

                                      <br/>
                                      <br/>



                                    </Form>

                                    </div>



                </Segment>
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
              </Grid>


                            </div>



              </div>



          )




  }
}

export default UploadMusic;
