import React from 'react';
import { Container, Row, Col  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavFooter extends React.Component {
    
  render () {
    return (
      <footer>
          <Container fluid={true}>          
            <Row>
                <Col lg="4"></Col>
                <Col lg="4">
                    <p>Need help? Or, do you just want to speak to someone?</p>
                </Col>
                <Col lg="4">
                    <ul>
                        <li><a href="mailto:membership@tscra.org"><FontAwesomeIcon icon="envelope" /> Membership@tscra.org</a></li>
                        <li><a href="tel:882427820"><FontAwesomeIcon icon="phone" />800-242-7820</a></li>
                    </ul>
                </Col>
            </Row>
          </Container>
      </footer>
    );
  }
}
