import React, { Component } from 'react';
import Modal from './Modal';
import MembershipAssignment from '../PublicView/Pages/EndUser/Signup/MembershipAssignment';
import ProductForm from './Pages/Forms/ProductForm';
import { withRouter } from 'react-router-dom';



class AdminHeader extends Component {
  state = {
    showModal: false,
    formType: ''
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    // console.log('admin header: ', this.props.history)
    return (
        <div className="admin-header">
          <div className="admin-header-title">
            {
            this.props.history.location.pathname === "/admin/users" 
            ? <h2>ADMINISTRATION > STAFF</h2>
            :this.props.history.location.pathname === "/admin/membership"
            ? <h2>MEMBERSHIP > MEMBERSHIP</h2>
            : <h2>Default Header</h2> 
            }
          </div>
          {/* <div className="admin-header-btns">
            <button>DELETE</button>
            <button>EDIT</button>
            <button className="modal_opener" onClick={() => {
              this.toggleModal();
              this.setState({formType:"productForm"})
            }}>ADD NEW PRODUCT</button>
            <button className="modal_opener" onClick={() => {
              this.toggleModal();
              this.setState({formType:"memberForm" })
              }}>ADD NEW</button>
          </div> */}
          <Modal 
            show={this.state.showModal}
            closeCallback={this.toggleModal}
            customClass="custom_modal_class"
          >
            <React.Fragment>
            {
              this.state.formType === "memberForm" ? <MembershipAssignment/>
              : this.state.formType === "productForm" ? <ProductForm/>
              : null
            }
              
            </React.Fragment>
          </Modal>
        </div>


    );
  }
}

export default withRouter(AdminHeader);