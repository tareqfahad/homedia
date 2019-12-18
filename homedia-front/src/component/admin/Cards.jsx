import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Cards extends React.Component {

  state={
    info:this.props.video
  }

  render () {








let ondelete = () =>{

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

                            <Link to ={`/admin/edit/${this.state.info._id}`}>
                         <Button basic color='black'>
                             Edit
                           </Button>
                         </Link>

                
                           <Button basic color='red' onClick={ondelete}>
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
