import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './ShippingDetails.module.css'
import { Fragment } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
const ShippingDetails = props => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx);
  
    const cartItems = cartCtx.items.map((item) => (
      <div className={classes.card}>
        <div className={classes.leftImg}>
          <img src={item.image} className={classes.image}/>
        </div>
        <div className={classes.rightPart}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      </div>
    ));
    const subTotal = parseFloat(cartCtx.totalAmount.toFixed(2));
    const tax = parseFloat((subTotal*0.18))
    const total = parseFloat(tax + subTotal)
    return (
        <Fragment>
        
            <div className={classes.header}>
               <h1>Shipping Details</h1>
            </div>
    

      <div className={classes.container}>
        <div className={classes.upper}>
        <div className={classes.upperLeft}>
        <form>
        <div>
            <input type="text" name="fName" placeholder="First Name" className={classes['half-name']} />
            <input type="text" name="lName" placeholder="Last Name" className={classes['half-name']}/>
        </div>
        <div>
            <input type="text" name="address" placeholder="Address" className={classes.fullName}/>
            
        </div>
        <div>
            <input type="text" name="address" placeholder="Address 2" className={classes.fullName} />
        </div>
        <div>
            <input type="text" name="country" placeholder="Country" className={classes['half-name']} />
            <input type="text" name="city" placeholder="City" className={classes['half-name']} />
        </div>
        <div>
            <input type="number" name="pCode" placeholder="Postal Code" className={classes['half-name']} />
            <input type="number" name="pNumber" placeholder=" Phone Number" className={classes['half-name']} />
        </div>
        <input type="submit" value="Submit" className={classes.btn}/>
</form>
</div>
          <div className={classes.upperRight}>
            <h1>Summary</h1>
            <div className={classes.cards}>{cartItems}
             <div className={classes.bill}>
            <p>SubToatal Amount:</p>
            <p>${subTotal}</p>
            </div>
            <div className={classes.bill}>
            <p>Shipping</p>
            <p>Free</p>
            </div>
            <div className={classes.bill}>
            <p>Total</p>
             <p>${total.toFixed(2)}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <Link className={classes.button} to="/payment">
          Next
        </Link>
        <Link className={classes["alt--button"]} to="/">
          Back
        </Link>
      </div>
    </Fragment>
    )
}

export default ShippingDetails;