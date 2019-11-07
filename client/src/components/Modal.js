import React from "react";
import ReactDOM from "react-dom";
import "styles/components/ModalStyles.scss";

function Modal(props) {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="Modal">
      <div onClick={e => e.stopPropagation()} className="Modal__container">
        Container
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
