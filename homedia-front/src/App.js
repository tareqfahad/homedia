import React from 'react'
import AdminApp from './component/admin/AdminApp'

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


                  </Switch>



                </div>



             </Router>







      )


  }
}

export default App;
