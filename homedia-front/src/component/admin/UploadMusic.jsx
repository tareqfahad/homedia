import React from 'react'
import { Grid, Segment , Form , Button } from 'semantic-ui-react'


class UploadMusic extends React.Component {
  render () {







let onChangeHandler=event=>{

        console.log(event.target.files[0])

    }


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
                                        <input placeholder='Playlist Name' type='field' />
                                      </Form.Field>

                                      <Form.Field>

                                      <label>Upload Folder</label>

                                         <input
                                           accept="audio/*"
                                           type="file"
                                           name="files"

                                           onChange={onChangeHandler}
                                         />



                     </Form.Field>


                  <Button primary type='submit'  >Submit</Button>

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
