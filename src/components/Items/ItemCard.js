import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import CartContext from '../../store/cart-context'
import classes from './ItemCard.module.css'
import { Route } from 'react-router';
import ProductDetail from '../product-detail/ProductDetail';
const ItemCard = props => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price}`

    const splitDescription = props.description.slice(0, 100);


    const addItemHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            image: props.image
        });
    }
    const linkTo ='/product-detail/' + props.id
    console.log(props.id)
    return (
        <Fragment>
        <li className={classes.item} >
        <div className={classes.container}>
            <img src={props.image} className={classes.image} />
            <Link to={linkTo} className={classes.names}>{props.name}</Link>
            <p>{splitDescription}</p>
            <p className={classes.price}>{price}</p>
            <p>Rating: {props.rating}</p>
        <button onClick={addItemHandler}>Add to cart</button>
        </div>
        </li>
        
        </Fragment>
    )
}

export default ItemCard;