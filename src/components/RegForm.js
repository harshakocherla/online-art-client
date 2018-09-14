import React, {Component} from 'react';
import { 
    Card, 
    CardText, 
    CardBody,
    CardHeader, 
    Button, 
    Col, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    FormFeedback,
    Row
 } from 'reactstrap';

class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            userType: ''
         }
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

        if (e.target.name === 'username' && e.target.name.length < 7) {
            this.username.setNativeProperty({valid: false})
        }
      }

    render() { 
        return ( 
                    <div className = 'container'>
                        <Card body inverse color="success">
                            <CardHeader>Register</CardHeader>
                            <CardBody>
                                    <CardText>
                                        <Form>
                                            <FormGroup row>
                                                <Label for="username" sm={2}>username</Label>
                                                <Col sm={10}>
                                                    <Input 
                                                        type="text" 
                                                        name="username" 
                                                        id="username" 
                                                        placeholder="johnsmith"
                                                        value = {this.state.username}
                                                        onChange = {this.handleChange}
                                                        valid = {false}
                                                        ref = {username => this.username = username} />
                                                    <FormFeedback>
                                                        username should be more than 6 characters.
                                                    </FormFeedback>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="password" sm={2}>password</Label>
                                                <Col sm={10}>
                                                    <Input 
                                                        type="password" 
                                                        name="password" 
                                                        id="password" 
                                                        placeholder="password"
                                                        value = {this.state.password}
                                                        onChange = {this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="confirmPassword" sm={2}>confirm password</Label>
                                                <Col sm={10}>
                                                    <Input 
                                                        type="password" 
                                                        name="confirmPassword" 
                                                        id="confirmPassword" 
                                                        placeholder="confirm password"
                                                        value = {this.state.confirmPassword}
                                                        onChange = {this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="firstName" sm={2}>first name</Label>
                                                <Col sm={10}>
                                                    <Input 
                                                        type="text" 
                                                        name="firstName" 
                                                        id="firstName" 
                                                        placeholder="john"
                                                        value = {this.state.firstName}
                                                        onChange ={this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="lastName" sm={2}>last name</Label>
                                                <Col sm={10}>
                                                    <Input 
                                                        type="text" 
                                                        name="lastName" 
                                                        id="lastName" 
                                                        placeholder="smith"
                                                        value = {this.state.lastName}
                                                        onChange = {this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="email" sm={2}>email</Label>
                                                <Col sm={10}>
                                                    <Input 
                                                        type="text" 
                                                        name="email" 
                                                        id="email" 
                                                        placeholder="johnsmith@gmail.com"
                                                        value = {this.state.email}
                                                        onChange ={this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="userType" sm={2}>user type</Label>
                                                <Col sm={10}>
                                                    <Row>
                                                        <Col sm={3} inline>
                                                            <Input 
                                                                type="radio" name="artist" />
                                                            <Label for="artist">artist</Label>
                                                        </Col>
                                                        <Col sm={3} inline>
                                                            <Input type="radio" name="admin" />
                                                            <Label for="admin">admin</Label>
                                                        </Col>
                                                        <Col sm={4} inline>
                                                            <Input type="radio" name="customer" />
                                                            <Label for="customer">customer</Label>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardText>
                                <Button>submit</Button>
                            </CardBody>
                        </Card>
            </div>

         );
    }
}
 
export default RegForm;