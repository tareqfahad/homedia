import React from 'react'
import { Grid, Segment , Form , Button } from 'semantic-ui-react'


class UploadMusic extends React.Component {
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
                                        <input placeholder='Playlist Name' type='field' />
                                      </Form.Field>






                                      <Form.Field>

                                      <label>Upload Folder</label>
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



              </div>



          )




  }
}

export default UploadMusic;
