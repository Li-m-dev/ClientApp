import React from 'react';
import { Container, Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavMenuAccount extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isMember: false
    };
  }
  render () {
    return (
      <header className={this.state.isMember ? '' : 'hidden'} >
        <Navbar >
          <Container fluid={true}>
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            </NavItem>
            </ul>
          </Container>
        </Navbar>
      </header>
    );
  }
}
