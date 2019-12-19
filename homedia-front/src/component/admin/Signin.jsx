import React, { Component } from 'react'
import logo from '../../logo.png';
import axios from 'axios'
import {Menu, Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {login} from './Auth'

export default class Signin extends Component {

  state={
    err:'noerr'
  }
  
  onChangeHandler = e =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmitHandler = ()=>{

    login(this.state)
    .then(res=>{
      if(res)
    {
      window.location.href ="/admin"
    }
    else{
      this.setState({err:''})
      console.log("fegege");
      
    }
    })

    .catch(err => {
      console.log(err);

    })
    
  }

    // this.setState({err:''})
  
    render() {
        return (
        <div>
            <div className="nav">
            <Menu inverted visible attached='top'>
                <Menu.Item >
                    HoModie
                </Menu.Item>
     

            <Link to="/signup">
                <Menu.Item position='right'>
                Sign up
                </Menu.Item>
            </Link>
        </Menu>
            </div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        <Image src={logo} /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.onSubmitHandler}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username" onChange={this.onChangeHandler} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
            onChange={this.onChangeHandler}
          />

          <Button color='black' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message
      error
      header='Password or Username is not correct'
      content='Please enter the correct Password or Username'
      hidden={this.state.err}
      
      />
      <Message>
    
        New to us? <Link to="/signup"><a>Sign Up</a></Link>
      </Message>
    </Grid.Column>
  </Grid>
        </div>
        )
    }
}
