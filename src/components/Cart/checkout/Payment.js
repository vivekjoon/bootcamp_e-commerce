import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import CartContext from "../../../store/cart-context";
import classes from "./Payment.module.css";

const Payment = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const cartItems = cartCtx.items.map((item) => (
    <div className={classes.card}>
      <div className={classes.leftImg}>
        <img src={item.image} className={classes.image}/>
      </div>
      <div className={classes.rightPart}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  ));

  const [cardNumber, setCardNumber] = useState("");
  const [year, setYear] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [coupon, setCoupon] = useState('')
  const [finalAmount, setFinalAmount] = useState('')

  const cardNumberHandler = (event) => {
    setCardNumber(event.target.value);
  };
  const YearHandler = (event) => {
    setYear(event.target.value);
  };
  const codeHandler = (event) => {
    setCode(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const couponHandler = (event) => {
    setCoupon(event.target.value)
  }
  
  const subTotal = parseFloat(cartCtx.totalAmount.toFixed(2));
  const tax = parseFloat((subTotal*0.18))
  const discountHandler = event => {
    event.preventDefault();
    if(coupon.trim() === "COUPON5"){
      const total = parseFloat(tax + subTotal - 5);
      setFinalAmount(total);
    }
    else{
      setFinalAmount(total);
    }
  }
  const couponLength = coupon.length <= 0;

 
  const total = parseFloat(tax + subTotal);
  
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.upper}>
          <div className={classes.upperLeft}>
              <h1>Payment Method</h1>
            <div className={classes.cards}>
              <div>
                <input type="radio" className={classes.radio} />
                <label>Credit Card</label>
                <div>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    onChange={cardNumberHandler}
                  />
                  <input
                    type="text"
                    placeholder="MM / YY"
                    onChange={YearHandler}
                  />
                  <input type="text" placeholder="CVV" onChange={codeHandler} />
                </div>
                <div>
                  <input
                    placeholder="Card Holder Name"
                    onChange={nameHandler}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.upperRight}>
            <h1>Summary</h1>
            <div className={classes.cards}>{cartItems}
            <div>
              <label>Have a coupon?</label>
              <input placeholder="Enter Coupon" onChange={couponHandler}/>
              <button onClick={discountHandler}>Enter</button>
              </div>
            <div className={classes.bill}>
            <p>SubToatal Amount:</p>
            <p>{subTotal}</p>
            </div>
            <div className={classes.bill}>
            <p>Shipping</p>
            <p>Free</p>
            </div>
            <div className={classes.bill}>
            <p>Total</p>
            <p>{!couponLength && finalAmount}</p>
            <p>{couponLength && total}</p>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <Link className={classes.button} to="/order">
          Pay Now
        </Link>
        <Link className={classes["alt--button"]} to="/shipping-details">
          Cancel
        </Link>
      </div>
    </Fragment>
  );
};
export default Payment;
