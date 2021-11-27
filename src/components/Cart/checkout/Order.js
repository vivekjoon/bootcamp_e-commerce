import { Fragment } from "react/cjs/react.development"
import classes from "./Order.module.css"
import { Link } from "react-router-dom"
const Order = props => {
    
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.main}>
                    <h1>Your Order Has been Received</h1>
                </div>
                <div  className={classes.home}>
                <Link to="/">Click here To Go back to Home Page</Link>
            </div>
            </div>
        </Fragment>
        
    )
}

export default Order;