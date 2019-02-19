import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import SideNav from './SideNav';


const Layout = ({ children, ...rest }) => {
    return (
        <div className="admin-main">
            <SideNav/>
            <Container fluid={true}>
                {children}
            </Container>

        </div>
    )
}

const AdminLayout = ({ component: Component, ...rest }) => {
    console.log("AdminLayout");
    //todo: logic for validate user 

    return (
        <Route {...rest} render={matchProps => (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        )} />
    )
};

export default AdminLayout;