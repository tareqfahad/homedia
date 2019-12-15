import React from 'react'
import { Grid , Button, Checkbox , Card , Image , Icon  } from 'semantic-ui-react'
import UploadMusic from './UploadMusic'
import UploadVideo from './UploadVideo'
import UploadPhoto from './UploadPhoto'
import {BrowserRouter as Router,Switch,Route , Link} from "react-router-dom";



class Upload extends React.Component {
  render () {



          return(

            <Router>
            <div className="FormController">



              <Grid container columns={3}>
                    <Link to="/admin/upload/photo">
                <Grid.Column>


                  <div class="cards-list">

                  <div class="card 1">
                    <div class="card_image"> <img src="https://png.pngtree.com/svg/20170706/4e21802f9c.png" /> </div>
                    <div class="card_title title-white">
                      <p>Photo</p>
                    </div>
                  </div>
                </div>





                </Grid.Column>
                </Link>


                <Link to="/admin/upload/video">
                <Grid.Column>





                  <div class="cards-list">

                  <div class="card 1">
                    <div class="card_image"> <img src="http://simpleicon.com/wp-content/uploads/video.png" /> </div>
                    <div class="card_title title-white">
                      <p>Video</p>
                    </div>
                  </div>
                </div>



                </Grid.Column>
                </Link>

                <Link to="/admin/upload/music">
                <Grid.Column>
                  <div class="cards-list">

                  <div class="card 1">
                    <div class="card_image"> <img src="https://cdn3.iconfinder.com/data/icons/music-and-audio-1/26/music-audio-1027-512.png" /> </div>
                    <div class="card_title title-white">
                      <p>Muisc</p>
                    </div>
                  </div>
                </div>





                </Grid.Column>
                </Link>
              </Grid>


                <Switch>
                  <Route exact path="/admin/upload/video">

                      <UploadVideo/>

                  </Route>

                  <Route exact path="/admin/upload/music">

                      <UploadMusic/>

                  </Route>

                  <Route exact path="/admin/upload/photo">

                      <UploadPhoto/>

                  </Route>





                </Switch>




            </div>
            </Router>

          )





  }
}

export default Upload;
