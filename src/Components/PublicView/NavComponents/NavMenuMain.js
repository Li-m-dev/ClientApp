import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

export default class NavMenu extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loginClick() {
    // const response = axios.get('https://localhost:44350/api/values');
    // console.log('response', response);
  }

  render () {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavbarBrand tag={Link} to="/"><img src="/images/TSCRALogo.png" alt="TSCRA Membership" /></NavbarBrand>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavItem>
                        <NavLink tag={RouterNavLink} className="" to="/home" activeClassName="active">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} className="" to="/blog" activeClassName="active">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} className="" to="/store" activeClassName="active">Store</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} className="" to="/events" activeClassName="active">Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} className="" to="/membership" activeClassName="active">Membership</NavLink>
                    </NavItem>
                </ul>
                <Form className="menuLogin">
                    <FormGroup>
                        <Label for="memberEmail"><FontAwesomeIcon icon="envelope" /></Label>
                        <Input type="email" name="email" id="memberEmail" placeholder="Enter Email Address" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="memberPassword"><FontAwesomeIcon icon="lock" /></Label>
                        <Input type="password" name="passwords" id="memberPassword" placeholder="Enter Password" />
                    </FormGroup>
                    <Button onClick={this.loginClick()} >Login</Button>
                    <Button tag={RouterNavLink} to="/resetpassword">Forgot Password?</Button>
                </Form>
            </div>
        </nav>
      </header>
    );
  }
}
