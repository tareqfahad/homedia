import React from 'react'
import AdminApp from './component/admin/AdminApp'
import Signup from './component/admin/Signup'
import Signin from './component/admin/Signin'
import Landing from './component/home/Landing'
import About from './component/home/About'
import Home from './component/home/Home'
import VideoPlay from './component/home/VideoPlayContainer'
import MusicPlay from './component/home/MusicPlay'
import AllMusic from './component/home/AllMusic'
import AllVideos from './component/home/AllVideos'


import {BrowserRouter as Router,Switch,Route} from "react-router-dom";



class App extends React.Component {
  render () {

      return(

              <Router>

                <div>




                  <Switch>




                    <Route path="/admin">

                    <AdminApp/>

                    </Route>

                    <Route path="/landing">
                    <Landing/>
                    </Route>


                    <Route exact path="/video">
                    <VideoPlay/>
                    </Route>
                    <Route exact path="/video/:id" render ={ (props)=> <VideoPlay {...props}/> }/>

                  <Route path="/allmusic">
                    <AllMusic/>
                  </Route>


                  <Route exact path="/music">
                    <MusicPlay/>
                  </Route>
                  <Route exact path="/music/:id" render ={ (props)=> <MusicPlay {...props}/> }/>

                  <Route path="/allvideos">
                    <AllVideos/>
                  </Route>


                    <Route path="/signup">
                    <Signup/>
                    </Route>

                    <Route path="/signin">
                    <Signin/>
                    </Route>

                    <Route path="/about">
                    <About/>
                    </Route>

                   <Route path="/">
                    <Home/>
                  </Route>

                  
                  </Switch>



                </div>



             </Router>







      )


  }
}

export default App;
