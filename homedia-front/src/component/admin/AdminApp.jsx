import React from 'react'
import Navbar from './Navbar'
import Admin from './Admin'
import Upload from './Upload'
import Settings from './Settings'
import Editpost from './Editpost'
import App from '../../App'
import {BrowserRouter as Router,Switch,Route , Redirect} from "react-router-dom";


class AdminApp extends React.Component {
  render () {

      return(

        <Router>

          <div>




          <Navbar/>

            <Switch>

              <Route   path="/admin/edit/:id" render={(props)=>   <Editpost {...props}/>} />



              <Route path="/admin/upload">

              <Upload/>

              </Route>

              <Route path="/admin/settings">

              <Settings/>

              </Route>


              <Route path="/admin">

              <Admin/>

              </Route>

              <Route path="/home">
                    <App/>
              </Route>










            </Switch>



          </div>



       </Router>



      )



  }
}

export default AdminApp;
