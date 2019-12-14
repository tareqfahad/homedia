import React from 'react'

import { Pie } from 'react-chartjs-2';

class Piechar extends React.Component {


 Space = "Space"

state={

      labels:[ "Space","Used" ],
      datasets: [{

          data:[2000 , 500],
        backgroundColor:["#4C6988" , "#147D83"]
      }]


}


  render () {


        return(


            <div>


              <Pie
                data={{

                    labels: this.state.lables,
                    datasets : this.state.datasets


                }}
        



                />

            </div>


        )



  }
}

export default Piechar;
