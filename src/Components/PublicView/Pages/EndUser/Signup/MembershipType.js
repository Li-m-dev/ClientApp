import React from 'react';
import { connect } from 'react-redux';
import { fetchMembershipTypes, selectMembershipType, fetchMembershipPackages} from '../../../../../Redux/Actions/EndUser/MembershipAction';
import { ComboBox } from '@progress/kendo-react-dropdowns';

class Membership extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
      
    }
    componentDidMount() {
        this.props.fetchMembershipTypes();
       
    }

    handleChange = (event) => {
        this.props.selectMembershipType(event.target.value);
        console.log(event.target.value)
        this.props.fetchMembershipPackages(event.target.value.membershipTypeID);
    }


    render() {
        return (
            <div className="memberShipTypeContainer">
                <h1>Member Information <br/></h1>
                <h3>Fill out the following fields to claim your membership! <br/></h3>
                <div className="">
                    <label>What type of membership do you want?</label>
                    <ComboBox data={this.props.membership.membershipTypes}
                        textField="description"
                        dataItemKey="membershipTypeID"
                        onChange={this.handleChange}
                        value={this.value}
                        width={300}/>
                </div> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { membership: state.membership }
}

export default connect(mapStateToProps, { fetchMembershipTypes,selectMembershipType,fetchMembershipPackages})(Membership);

