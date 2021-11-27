import classes from "./Modal.module.css";
import { Fragment } from 'react/cjs/react.production.min';
import ReactDom from "react-dom";

const Backdrop = props => {
return(
    <div className={classes.backdrop} onClick={props.onHideCart}></div>
)
};

const ModalOverlay = props => {
return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
)
}

const portalElement = document.getElementById('overlay');

const Modal = props => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}   
        </Fragment>
    )
};

export default Modal;