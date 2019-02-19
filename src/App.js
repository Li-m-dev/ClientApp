import React from 'react';
import { Switch } from 'react-router-dom';
import AdminLayout from './Components/AdminView/AdminLayout';
import RouteLayout from './Components/PublicView/Layout';
import AdminMembership from './Components/AdminView/Pages/Membership/AdminMebership';
import Home from './Components/PublicView/Pages/Home/Home';
import BillingInformation from './Components/PublicView/Pages/EndUser/Billing/BillingInformation';
import RegisterConfirmation from './Components/PublicView/Pages/EndUser/Signup/RegisterConfirmation';
import ResetPassword from './Components/PublicView/Pages/EndUser/PasswordManagement/ResetPassword';
import ChangePassword from './Components/PublicView/Pages/EndUser/PasswordManagement/ChangePassword';
import SignupWizardLayout from './Components/PublicView/SignupWizard/SignupWizardLayout';
import '@progress/kendo-theme-default/dist/all.css';
import SignupLayout from './Components/PublicView/SignupLayout';
import './css/index.css';
import Users from './Components/AdminView/Pages/Administration/ManageUsers';



export default () => (
    <div>
        <Switch>
            <RouteLayout exact path="/" component={Home} />
            <RouteLayout path="/home" component={Home} />
            <RouteLayout path="/registerConfirmation" component={RegisterConfirmation} />
            <RouteLayout path="/billingInformation" component={BillingInformation} />
            <RouteLayout path='/resetpassword' component={ResetPassword} />
            <RouteLayout path='/changepassword' component={ChangePassword} />
            <SignupLayout path="/signupwizard" component={SignupWizardLayout} />
            <SignupLayout path="/membership" component={SignupWizardLayout} />
            <SignupLayout path="/membership/:userId" component={SignupWizardLayout} />

            {/* Admin Pages */}
            <AdminLayout path="/admin/membership" component={AdminMembership}/>
            <AdminLayout path="/admin/users" component={Users}/>
        </Switch>
    </div>
);