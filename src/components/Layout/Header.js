import { Fragment } from "react";
import eImage from "../../assets/ecommerce.png"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>E-commerce</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={eImage} />
            </div>
        </Fragment>
        
    ) 
        
};

export default Header