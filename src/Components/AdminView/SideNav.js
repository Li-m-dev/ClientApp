import React, { Component } from 'react';
import { Button, CardBody, Card, UncontrolledCollapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideNav extends Component {

  render() {
    return (
      <div className="side-nav">
          <div className="side-nav-img"><img src="/images/TSCRALogo.png" alt="logo"/></div>
          <div className="side-nav-user-info">
            USER: Lisa Walker
            <br/>
            ROLE: Executive Admin    
            <div className="user-info-btn">
              <button>LOG OUT</button>
            </div>
          </div>
          <div className="side-nav-dash">
            <div className="side-nav-dash-item">
              <Button color="link" id="toggler1">ADMINISTRATION</Button>
              <UncontrolledCollapse toggler="#toggler1">
                <Card style={{ border: "none"}}>
                  <CardBody>
                    <ul>
                      <Link to="/admin/users"><li>STAFF</li></Link>
                      <li>REGIONS</li>
                      <li>DISTRICTS</li>
                      <li>PROGRAMS</li>
                      <li>POSITION GROUPS</li>
                      <li>POSITIONS</li>
                      <li>RATES/TERMS/VOLUMES</li>
                    </ul>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div className="side-nav-dash-item">
              <Button color="link" id="toggler2">PRODUCTS</Button>
              <UncontrolledCollapse toggler="#toggler2">
                <Card style={{ border: "none"}}>
                  <CardBody>
                    <ul>
                      <li>MANAGE PRODUCTS</li>
                    </ul>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div className="side-nav-dash-item">
              <Button color="link" id="toggler3">EVENT MANAGEMENT</Button>
              <UncontrolledCollapse toggler="#toggler3">
                <Card style={{ border: "none"}}>
                  <CardBody>
                    <ul>
                      <li>CALENDAR</li>
                    </ul>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div className="side-nav-dash-item">
              <Button color="link" id="toggler4">ACCOUNTING</Button>
              <UncontrolledCollapse toggler="#toggler4">
                <Card style={{ border: "none"}}>
                  <CardBody>
                    <ul>
                      <li>INVOICING</li>
                      <li>RENEWALS</li>
                      <li>JOBS</li>
                    </ul>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div className="side-nav-dash-item">
              <Button color="link" id="toggler5">MEMBERSHIP</Button>
              <UncontrolledCollapse toggler="#toggler5">
                <Card style={{ border: "none"}}>
                  <CardBody>
                    <ul>
                      <Link to="/admin/membership"><li>MEMBERSHIP</li></Link>
                      <li>CONTACTS</li>
                    </ul>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            <div className="side-nav-dash-item">
              <Button color="link" id="toggler6">REPORTING</Button>
              <UncontrolledCollapse toggler="#toggler6">
                <Card style={{ border: "none"}}>
                  <CardBody>
                    <ul>
                      <li>TEST1</li>
                      <li>TEST2</li>
                    </ul>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </div>
      </div>
    );
  }
}

export default SideNav;