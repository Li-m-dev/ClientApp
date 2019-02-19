import * as Home from './HomeReducer';
import * as Membership from './EndUser/MembershipReducer';
import * as Common from './CommonReducer';
import * as Billing from './EndUser/BillingReducer';
import * as SignupWizard from './SignupWizardReducer';
import * as User from './Admin/ManageUserReducer';

const reducers = {
    home: Home.reducer,
    membership: Membership.reducer,
    common : Common.reducer,
    billing : Billing.reducer,
    signupWizard: SignupWizard.reducer,
    user:User.reducer

};

export default reducers;