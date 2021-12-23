import "../css/Styles.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";


const Profile = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  const [showMessage, setShowMessage] = useState(false);
  const showMessageHandler = async () => {
    setShowMessage("Subscription Cancelled");
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
            <img
              src="https://icon-library.com/images/profile-image-icon/profile-image-icon-5.jpg"
              class="img-thumbnail"
              alt="display"
            />
            <h3>Email:teyime9335@wolfpat.com</h3>
            <h3>Name:teyime</h3>
            <h3>subscription:Bronze</h3>
            <button type="submit" className="button" onClick={() => {showMessageHandler()}}>Cancel Subscription</button>
            <p style={{backgroundColor:"#cbffc0"} }>{showMessage}</p>

          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};



export default Profile;
