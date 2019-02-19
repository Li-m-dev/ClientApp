import React from 'react';
import { connect } from 'react-redux';
import { fetchMembershipPackages, selectMembershipPackage, addMembershipAssignment } from '../../../../../Redux/Actions/EndUser/MembershipAction';
import { signupPlus, signupSubtract } from '../../../../../Redux/Actions/SignupWizardActions';
import { fetchStates } from '../../../../../Redux/Actions/CommonActions';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import MembershipType from './MembershipType';
import { Input } from '@progress/kendo-react-inputs';

class MembershipAssignment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            OrganizationName:"",
            MailingAddress1:"",
            MailingAddress2:"",
            MailingCity:"",
            MailingZip :"",
            Phone:"",
            MailingStateId: 1,
            FirstName : "",
            LastName : "",
            MembershipPackageId:1,
            AspNetUserId:""
        };
    }
   
    componentDidMount() {
        this.props.fetchStates();
        //console.log(this.props)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handlePackageChange = (event) => {
        this.setState({
            MembershipPackageId: event.target.value.membershipPackageID   
        })
        this.props.selectMembershipPackage(event.target.value);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signupPlus(this.props.signupWizard.signupStep);
        //this.setState({ success: true });
        this.props.addMembershipAssignment(this.state);
            //this.props.history.push('/billingInformation');

    }
    
    handleState = (event) => {
        console.log(event.target.value);
        this.setState({
         MailingStateId: event.target.value.stateID   
     })
    }

    render() {
        return (
            <div className="membershipFormContainer">
              <div>
                    {/*<h2>{this.props.match.params.userId}</h2>*/}
                  </div>
                <MembershipType />
                { this.props.membership.membershipPackages ? 
                <form className="membershipForm" onSubmit={this.handleSubmit}> 
                    <div className="">
                        <label>
                            How many head(cattle)in total are you responsible for?<span className="blue">($ Membership cost)</span>
                        </label>
                        <ComboBox data={this.props.membership.membershipPackages}
                            textField="description"
                            dataItemKey="membershipPackageID"
                            onChange={this.handlePackageChange}
                            value={this.MembershipPackageId}
                            width={300}/>
                    </div>                
                    <div className="">
                        <label>Family/Group/OrganizationName - what name would you like on your membership ID card and magazine?</label>
                        <Input
                            validityStyles={false}
                            value={this.state.OrganizationName}
                            onChange={this.handleChange}
                            name="OrganizationName"
                            style={{ width: "400px" }}
                            minLength={2}
                            required={true}
                        />
                    </div>
                    <div className="firstNameLastNameContainer">
                        <div className="">
                            <label>FirstName</label>
                            <Input
                                validityStyles={false}
                                value={this.state.FirstName}
                                onChange={this.handleChange}
                                name="FirstName"
                                style={{ width: "100%" }}
                                minLength={2}
                                required={true}
                            />
                        </div>
                        <div className="">
                            <label>LastName</label>
                            <Input
                                validityStyles={false}
                                value={this.state.LastName}
                                onChange={this.handleChange}
                                name="LastName"
                                style={{ width: "100%" }}
                                minLength={2}
                                required={true}
                            />
                        </div>
                    </div>
                    <h3>Enter your <span className="blue">Mailing Address</span></h3>
                    <div className="mailingAddressContainer">
                        <div className="">
                            <label>Address1</label>
                            <Input
                                validityStyles={false}
                                value={this.state.MailingAddress1}
                                onChange={this.handleChange}
                                name="MailingAddress1"
                                style={{ width: "100%" }}
                                minLength={2}
                                required={true}
                            />
                        </div>
                        <div className="">
                            <label>Address2</label>
                            <Input
                                validityStyles={false}
                                value={this.state.MailingAddress2}
                                onChange={this.handleChange}
                                name="MailingAddress2"
                                style={{ width: "100%" }}
                                minLength={2}
                                //required={true}
                            />
                        </div>
                    </div>
                    <div className="cityStateZip">
                        <div className="">
                            <label>City</label>
                            <Input
                                validityStyles={false}
                                value={this.state.MailingCity}
                                onChange={this.handleChange}
                                name="MailingCity"
                                style={{ width: "250px" }}
                                minLength={2}
                                required={true}
                            />
                        </div>
                        <div className="">
                            <label>State </label>
                            <ComboBox data={this.props.common.states}
                                textField="stateDesc"
                                dataItemKey="stateID"
                                onChange={this.handleState}
                                value={this.stateID}
                                style={{ width: "100px", marginRight: "15px" }}/>
                         </div>
                        <div className="">
                            <label>Zip</label>
                            <Input
                                validityStyles={false}
                                value={this.state.MailingZip}
                                onChange={this.handleChange}
                                name="MailingZip"
                                style={{ width: "200px" }}
                                minLength={2}
                                required={true}
                            />
                        </div>
                        <div className="">
                            <label>Phone</label>
                            <Input
                                validityStyles={false}
                                value={this.state.Phone}
                                onChange={this.handleChange}
                                name="Phone"
                                style={{ width: "200px" }}
                                minLength={2}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="vertHorzCenter">
                            <button type="submit" className="signUpBtns">NEXT STEP</button>
                        <p>When you have answered all the fields, click the <span className="blue">BLUE</span> "Next Step" to continue! </p>
                    </div>
                    
                 </form>
                 : null}
           
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        membership: state.membership,
        common: state.common,
        signupWizard: state.signupWizard
     }
}

export default connect(mapStateToProps, { fetchMembershipPackages, selectMembershipPackage, addMembershipAssignment, signupPlus, signupSubtract, fetchStates })(MembershipAssignment);

