import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavMenuMain from './NavComponents/NavMenuMain';
import NavMenuAccount from './NavComponents/NavMenuAccount';
import NavFooter from './NavComponents/NavFooter';

const Layout = ({ children, ...rest }) => {
    return (
        <div>
            <NavMenuMain />
            <NavMenuAccount />
            <Container fluid={true}>
                {children}
            </Container>
            <NavFooter />
        </div>
    )
}

const RouteLayout = ({ component: Component, ...rest }) => {
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

export default RouteLayout;