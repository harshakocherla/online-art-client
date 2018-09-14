import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Panel} from 'react-bootstrap';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            enableValidation: false,
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            userType: ''
         }
    }

      validateFirstName = () => {
          if(this.state.enableValidation) return null;
        const length = this.state.firstName.length;
        if (length > 0) return 'success';
        else return 'error';
      }
    validateLastName = () => {
        if(this.state.enableValidation) return null;

        const length = this.state.lastName.length;
        if (length > 0) return 'success';
        else return 'error';
      }
    validateUserName = () => {
        if(this.state.enableValidation) return null;

        const length = this.state.username.length;
        if (length > 5) return 'success';
        else if(length > 1) return 'warning';
        else return 'error';
      }
      validateEmail = () => {
        if(this.state.enableValidation) return null;

        if (this.state.email.indexOf('@') > -1) return 'success';
        else return 'error';
      }
      validatePassword =() =>{
        if(this.state.enableValidation) return null;

        const length = this.state.password.length;
        if (length > 5) return 'success';
        else if(length > 1) return 'warning';
        else return 'error';
      }

      validateConfirmPassword = () => {
        if(this.state.enableValidation) return null;

          const{
              password,
              confirmPassword
          } =  this.state;
        if (password === confirmPassword) return 'success';
        else return 'error';
      }
    
      handleChange = (e) => {
        this.setState({ enableValidation: true, [e.target.name]: e.target.value });
      }

    render() { 
        return ( 
            <div style = {{width: '300px', margin: 'auto'}}>
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Register</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
                <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.validateFirstName()}
        >
          <ControlLabel>first name:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.firstName}
            name = "firstName"
            placeholder="Enter first name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>First Name should not be empty.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.validateLastName()}
        >
          <ControlLabel>last name:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.lastName}
            name = "lastName"
            placeholder="Enter last name"
            onChange={this.handleChange}
            />
          <FormControl.Feedback />
          <HelpBlock>Last Name should not be empty.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.validateUserName()}
        >
          <ControlLabel>username:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username}
            name = "username"
            placeholder="Enter username"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>User Name should not be empty and should be atleast 6 characters.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.validateEmail()}
        >
          <ControlLabel>email:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.email}
            name = "email"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Please enter a valid email.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.validatePassword()}
        >
          <ControlLabel>password:</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            name = "password"
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>password should be more than 6 characters.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.validateConfirmPassword()}
        >
          <ControlLabel>conform password:</ControlLabel>
          <FormControl
            type="password"
            value={this.state.confirmPassword}
            name = "confirmPassword"
            placeholder="Enter confirm password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>password should be more than 6 characters.</HelpBlock>
        </FormGroup>
      </form>
      </Panel.Body>
  </Panel>
</div>
         );
    }
}
 
export default RegistrationForm;