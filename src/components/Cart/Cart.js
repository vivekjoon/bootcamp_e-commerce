import { useContext } from 'react';
import { useHistory } from 'react-router';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItems = cartCtx.items.map(item => <li className={classes['cart-items']}><span>{item.name}</span><span>${item.price}</span></li>);

    const removeItemHandler = () => {
        cartCtx.removeItem();
    }

    const history = useHistory();

    const goToSummary = () => {
        history.push("/shipping-details")

    }

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul>
            {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes['button--alt']} onClick={removeItemHandler}>ClearAll</button>}
                {hasItems && <button className={classes.button} onClick={goToSummary}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;