import React from "react";
import ReactDOM from "react-dom";
import "styles/components/ModalStyles.scss";

function Modal(props) {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="Modal">
      <div onClick={e => e.stopPropagation()} className="Modal__container">
        <div className="Modal__top-bar">
          <button
            aria-label="Close"
            onClick={props.onDismiss}
            className="Modal__close"
          >
            <i class="Modal__icon fas fa-window-close"></i>
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal;
