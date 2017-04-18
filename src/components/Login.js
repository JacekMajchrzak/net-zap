import React, {Component, PropTypes} from 'react';
import '../App.css';
import {FormGroup, Form, Col, FormControl, Button, Modal} from 'react-bootstrap/lib/'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            login: '',
            pass: ''
        };
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }


    handleChangePass(event) {
        this.setState({pass: event.target.value});
    }

    render() {
        let onHandleLogin = this.props.onHandleLogin.bind(this, this.state.login, this.state.pass);
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Please login to your netZAP account</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form horizontal className="Login-form">
                        <FormGroup controlId="formHorizontalEmail">
                            <Col md={3}>
                                Email
                            </Col>
                            <Col md={9}>
                                <FormControl type="email" onChange={this.handleChangeLogin} value={this.state.login} placeholder="Email"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col md={3}>
                                Password
                            </Col>
                            <Col md={9}>
                                <FormControl type="password" onChange={this.handleChangePass} value={this.state.pass} placeholder="Password"/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button bsStyle="primary" onClick={onHandleLogin}>LOGIN</Button>
                    <h3>{this.props.errorMessage}</h3>
                </Modal.Footer>

            </Modal.Dialog>
        );
    }
}

Login.propTypes = {
    onHandleLogin: PropTypes.func.isRequired
}

export default Login;