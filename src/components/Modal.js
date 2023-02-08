import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="fixed w-full h-full z-30 bg-black/60 top-0 left-0" onClick={props.onCloses}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[12vh] left-[5%] w-[90%] bg-black/80 z-50 border-solid rounded-xl overflow-y-auto scrollbar-hide h-[80%]">
      <div>{props.children}</div>
    </div>
  );
};

const portalel = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloses={props.onCloses} />, portalel)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalel
      )}
    </Fragment>
  );
};

export default Modal;
