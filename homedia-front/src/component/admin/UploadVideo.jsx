import React from 'react'
import { Grid, Segment , Form , Button } from 'semantic-ui-react'
import axios from 'axios'
class UploadVideo extends React.Component {

state={
  path:null,
  poster:null,
  video:null,
  apistatus:null
}


 onChangeHandlerPoster = e =>{
  let poster = e.target.files
  let reader = new FileReader()
  reader.readAsDataURL(poster[0])
  reader.onload = (e)=> {

      this.setState({
          poster:e.target.result
      })


  }


}


onChangeHandlerName = e => {
    this.setState({
      path:e.target.value
    })
}



  render () {




let submitHondler = () => {

      axios.post('http://localhost:62300/api/video/new', {

          name:this.state.path,
          posterpath:this.state.poster,
          filepath:this.state.video

      })
      .then(data => {
        if (data.status === 200) {

            this.setState({apistatus:"Files uploaded successfully"})


        }
      }).catch(err => {
        this.setState({apistatus:"Somthing wrong"})
      })


}






let onChangeHandlerVideo = e =>{

  let video = e.target.files
  let reader = new FileReader()
  reader.readAsDataURL(video[0])

  reader.onload =(e)=>{
    this.setState({
      video:e.target.result
    })
  }

}






  console.log(this.state.video)

          return(


              <div>

                <Grid columns='equal'>
<Grid.Column>

</Grid.Column>
<Grid.Column width={8}>
  <Segment>


          <div className="CenterForm">

          <Form>
              <Form.Field>
                <label>Name</label>
                <input placeholder='File Name' type='field' name="name" onChange={this.onChangeHandlerName} value={this.state.path} />
              </Form.Field>
              <Form.Field>

                          <label>Upload Poster</label>
                             <input
                               accept="image/*"
                               name="files"
                               type="file"

                               onChange={this.onChangeHandlerPoster}
                             />



                        </Form.Field>


                        <Form.Field>

                        <label>Upload Video</label>

                           <input
                             accept="video/*"
                             name="files"
                             type="file"

                             onChange={onChangeHandlerVideo}
                           />



                      </Form.Field>


                        <Button primary type='submit' onClick={submitHondler} >Submit</Button>

                        <br/>
                        <br/>


                                    <h1>{this.state.apistatus}</h1>
                      </Form>

                      </div>



  </Segment>
</Grid.Column>
<Grid.Column>

</Grid.Column>
</Grid>


              </div>



          )




  }
}

export default UploadVideo;
