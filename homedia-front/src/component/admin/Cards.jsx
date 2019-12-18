import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import axios from 'axios'

class Cards extends React.Component {

  state={
    info:this.props.video
  }

  render () {



console.log(this.state.info);

let testprofile = () =>{





}


let testdelete = () =>{

  axios.delete(`http://localhost:62300/api/video/delete/${this.state.info._id}`)



}

        return(

            <div>

                <Card.Group>





                  <Card>
                       <Card.Content>
                         <Image
                           floated='right'
                           size='mini'
                           src={this.state.info.posterpath}
                         />
                       <Card.Header>{this.state.info.name}</Card.Header>

                         <Card.Description>
                           <strong>{this.state.info.createdAt}</strong>
                         </Card.Description>
                       </Card.Content>
                       <Card.Content extra>
                         <div className='ui two buttons'>
                           <Button basic color='black' onClick={testprofile} >
                             Edit
                           </Button>
                           <Button basic color='red' onClick={testdelete}>
                             Delete
                           </Button>
                         </div>
                       </Card.Content>
                     </Card>






                </Card.Group>

            </div>



        )




  }
}

export default Cards;
