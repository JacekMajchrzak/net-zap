import React, { Component } from 'react';
import '../App.css';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import logo from '../logo.png';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/survey"><img src={logo} className="App-logo" alt="logo" /></Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="survey"><Link to="/survey">Survey</Link></NavItem>
                    <NavItem eventKey={2} href="data"><Link to="/data">Data Collection</Link></NavItem>
                    <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}><Link to="/help">Help</Link></MenuItem>
                        <MenuItem eventKey={3.2}><Link to="/profile">Profile</Link></MenuItem>
                        <MenuItem divider />
                        <MenuItem onClick={this.props.onLogout} eventKey={3.3}>Logout</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;
