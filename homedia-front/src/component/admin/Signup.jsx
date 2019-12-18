import React, { Component } from 'react'
import logo from '../../logo.png';
import axios from 'axios'
import {Menu, Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {register} from './Auth'



export default class Signup extends Component {



  state={err : "true"}
  onChangeHandler = e =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmitHandler = ()=>{

    register(this.state)
    .then(res=>{

      if (this.state.password != this.state.conf){
        this.setState({err:""})
        
      }

      if(res)
    {
      window.location.href ="/signin"
    }
    })
    .catch(err => console.log(err)
    )
  }
    render() {
      console.log(this.state);
      
        return (
        <div>
            <div className="nav">
            <Menu inverted visible attached='top'>
                <Menu.Item >
                    HoModie
                </Menu.Item>


            <Link to="/signin">
                <Menu.Item position='right'>
                Login
                </Menu.Item>
            </Link>
        </Menu>
            </div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        <Image src={logo} /> Create a new account
      </Header>
      <Form size='large' onSubmit={this.onSubmitHandler}>
        <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name="username" onChange={this.onChangeHandler}
/>
          <Form.Input
            fluid
            icon='lock'
            name="password"
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={this.onChangeHandler}
          />
          <Form.Input
            fluid
            icon='lock'
            name='conf'
            iconPosition='left'
            placeholder='Confirm Password'
            type='password'
            onChange={this.onChangeHandler}
          />

          <Button color='black' fluid size='large'>
            Sign Up
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
        Do you have an account? <Link to="/signin"><a>Sign In</a></Link>
      </Message>
    </Grid.Column>
  </Grid>
        </div>
        )
    }
}
