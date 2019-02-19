import React from 'react';
import { connect } from 'react-redux';
import { fetchHomes } from '../../Actions/HomeActions';
import { ComboBox } from '@progress/kendo-react-dropdowns';

class MembershipTest extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
        hiCollin: false
    };

    this.hiCollin = this.hiCollin.bind(this);    
  }   

  componentDidMount() {
    
    this.setState({
      companies: {
        hi: "sup",
      }
    })
  }
  onOpen = (e) => {
    console.log("event :: open");
}

  onClose = (e) => {
      console.log("event :: close");
  }
  
  hiCollin() {
    this.props.fetchHomes();
    console.log(this.props.home);
  }

  render () {
    return (
        <div className="membershipContainer">
          <div className="membershipContent">
            <h1>
             Member Information <br />
            </h1>
            <h3>
              Fill out the following fields to claim your membership!
              </h3>
            <div className="memberContainer" >
            {/* {this.props.home.home}
            <button onClick={this.hiCollin}>HiCollin</button> */}
            <ComboBox data={["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"]}
                    open={this.onOpen}
                    close={this.onClose}
                    onChange={this.handleChange}
                    value={this.value}
                    width={300}/>
            </div>
          </div>
        </div>        
    );
  }
}

function mapStateToProps(state) {
  return { home: state.home }
}

export default connect(mapStateToProps, { fetchHomes })(MembershipTest);

