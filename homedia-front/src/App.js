import React from 'react'
import AdminApp from './component/admin/AdminApp'
import Landing from './component/home/Landing'
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

                    <Route path="/">
                    <Landing/>
                    </Route>

                    <Route path="/video">
                    <VideoPlay/>
                    </Route>

                  </Switch>



                </div>



             </Router>







      )


  }
}

export default App;
