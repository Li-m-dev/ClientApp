import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavFooter from './NavComponents/NavFooter';

const Layout = ({ children, ...rest }) => {
    return (
        <div>
            <Container fluid={true}>
                {children}
            </Container>
            <NavFooter />
        </div>
    )
}

const SignupLayout = ({ component: Component, ...rest }) => {
    console.log("RouteLayout");
    //todo: logic for validate user 

    return (
        <Route {...rest} render={matchProps => (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        )} />
    )
};

export default SignupLayout;
