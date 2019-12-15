import React from 'react'
import { Grid, Segment , Form , Button } from 'semantic-ui-react'

class UploadVideo extends React.Component {
  render () {

          return(


              <div>

                <Grid columns='equal'>
<Grid.Column>

</Grid.Column>
<Grid.Column width={8}>
  <Segment>


          <div>

                    <Form>
                        <Form.Field>
                          <label>Name</label>
                          <input placeholder='Current Password' type='field' />
                        </Form.Field>




                          <Form.Field>

                          <label>Upload Poster</label>
                            <Button
                               content="Choose File"
                               labelPosition="left"
                               icon="file"
                               onClick={() => this.fileInputRef.current.click()}
                             />
                             <input
                               ref={this.fileInputRef}
                               type="file"
                               hidden
                               onChange={this.fileChange}
                             />



                        </Form.Field>


                        <Form.Field>

                        <label>Upload Video</label>
                          <Button
                             content="Choose File"
                             labelPosition="left"
                             icon="file"
                             onClick={() => this.fileInputRef.current.click()}
                           />
                           <input
                             ref={this.fileInputRef}
                             type="file"
                             hidden
                             onChange={this.fileChange}
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
