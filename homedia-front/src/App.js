import React from 'react'
import AdminApp from './component/admin/AdminApp'
import Signup from './component/admin/Signup'
import Signin from './component/admin/Signin'
import Landing from './component/home/Landing'
import Home from './component/home/Home'
import VideoPlay from './component/home/VideoPlay'

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

                    <Route path="/home">
                    <Home/>
                    </Route>

                    <Route path="/video">
                    <VideoPlay/>
                    </Route>

                    <Route path="/signup">
                    <Signup/>
                    </Route>

                    <Route path="/signin">
                    <Signin/>
                    </Route>
                  </Switch>



                </div>



             </Router>







      )


  }
}

export default App;
