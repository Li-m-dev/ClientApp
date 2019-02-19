import React from 'react';
import axios from 'axios';
import { NavLink} from 'reactstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHomes } from '../../../../Redux/Actions/HomeActions';

import AccountComponents from './AccountComponents/AccountCreate';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          homeScreen: true
        }

        this.toggleHomescreen = this.toggleHomescreen.bind(this);
    }

    componentDidMount() {
      this.setState({        
        homeScreen: true
      })
    }


    toggleHomescreen(event) {
        this.setState({
          homeScreen: !this.state.homeScreen
        })     

        event.preventDefault();
    }

    render() {
        return (
          <div className="homeContainer">
            <div className="homeWelcomeContent">
              {
                this.state.homeScreen ? 
                <div>
                  <h1>
                    Welcome to the NEW TSCRA <br />
                    Member Center!
                  </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h3>What would you like to do?</h3>
                  <div className="homeBtnContainer">
                      <div>        
                        <button onClick={this.toggleHomescreen} className="btnPrimary" to="/accountcreate">Create Account/Memberships</button>
                        <NavLink tag={RouterNavLink} className="btnSecondary" to="/accountcreate">Visit the store</NavLink>
                        <NavLink tag={RouterNavLink} className="btnSecondary floatRight" to="#">Check out events</NavLink>
                      </div>
                  </div>
                </div>
                : <AccountComponents/>
              }
            </div>
          </div>
        )
    }
}

function mapStateToProps(state) {
  return { home: state.home }
}

export default connect(mapStateToProps, { fetchHomes })(Home);