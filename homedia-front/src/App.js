import React from 'react'
import Admin from './component/admin/Admin'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



class App extends React.Component {
  render () {

      return(

              <Router>

                <div>

                  <Switch>
                    <Route path="/admin">

                    <Admin/>

                    </Route>


                  </Switch>



                </div>



             </Router>







      )


  }
}

export default App;
