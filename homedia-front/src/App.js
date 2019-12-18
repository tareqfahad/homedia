import React from 'react'
import AdminApp from './component/admin/AdminApp'
import Signup from './component/admin/Signup'
import Signin from './component/admin/Signin'
import Landing from './component/home/Landing'
import Home from './component/home/Home'
import VideoPlay from './component/home/VideoPlayContainer'


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


                    <Route path="/signup">
                    <Signup/>
                    </Route>

                    <Route path="/signin">
                    <Signin/>
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
