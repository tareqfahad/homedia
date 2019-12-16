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

                    labels: ["Space" , "Used"],
                    datasets : this.state.datasets


                }}
                height="100%"




                />

            </div>


        )



  }
}

export default Piechar;
