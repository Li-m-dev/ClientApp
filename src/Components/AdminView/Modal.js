import React from "react";
import PropTypes from "prop-types";

const Modal = ({ children, customClass, show, closeCallback }) => (
  <div
    className={`modal ${customClass}`}
    style={{ display: show ? "block" : "none" }}
  >
    <div className="overlay">
      <div className="modal_content">
        {children}
        <button className="modal-btn" onClick={closeCallback}>
          CANCEL <i className="fas fa-ban" />
        </button>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func
};

Modal.defaultProps = {
  children: <div>Empty Modal</div>,
  customClass: "",
  show: false,
  closeCallback: () => false
};

export default Modal;
