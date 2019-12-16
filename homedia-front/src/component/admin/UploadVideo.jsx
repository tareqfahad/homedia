import React from 'react'
import { Grid, Segment , Form , Button } from 'semantic-ui-react'

class UploadVideo extends React.Component {
  render () {



let onChangeHandler =event=> {

          console.log(event.target.files[0])



}


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
                          <input placeholder='File Name' type='field' />
                        </Form.Field>




                          <Form.Field>

                          <label>Upload Poster</label>
                             <input
                               accept="image/*"
                               name="files"
                               type="file"

                               onChange={onChangeHandler}
                             />



                        </Form.Field>


                        <Form.Field>

                        <label>Upload Video</label>

                           <input
                             accept="video/*"
                             name="files"
                             type="file"

                             onChange={onChangeHandler}
                           />



                      </Form.Field>


                        <Button primary type='submit' >Submit</Button>

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



          )




  }
}

export default UploadVideo;
