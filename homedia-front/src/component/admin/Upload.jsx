import React from 'react'
import { Grid , Button, Checkbox, Form , Radio, Segment } from 'semantic-ui-react'


class Upload extends React.Component {
  render () {

    console.log("This is upload");

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

                </Grid.Column>



                <Grid.Column>

                </Grid.Column>

              </Grid.Row>
              </Grid>







            </div>


          )





  }
}

export default Upload;
