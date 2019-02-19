import React from 'react';
import { connect } from 'react-redux';

class FreeAccount extends React.Component {

    render() {
        return (
            <div>
                <h1 onClick={this.props.closePopup}>FreeAccount</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { home: state.home }
}

export default connect(mapStateToProps, {})(FreeAccount);