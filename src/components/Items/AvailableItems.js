import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Card from '../UI/Card';
import classes from './AvailableItems.module.css'
import ItemCard from './ItemCard';
import { Route } from 'react-router';
import ProductDetail from '../product-detail/ProductDetail';


// const DUMMY_ITEMS = [
//     {
//       id: 'm1',
//       name: 'Mobile',
//       description: 'Best in the market',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Car',
//       description: 'Best in the market',
//       price: 1600.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Mat',
//       description: 'Better than a cat',
//       price: 18.99,
//     },
//   ];
  
  const AvailableItems = (props) => {

    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState([])
    
    const listItems = props.products.map(item =><ItemCard 
      key={item.id} 
      id={item.id} 
      image={item.image}
      name={item.title} 
      description={item.description} 
      price={item.price}
      rating={item.rating.rate} />
    )

    const titleChangeHandler = (event) => {
      setSearch(event.target.value)
      console.log(event.target.value)
      
    }
    
    
    const onClickHandler = event => {
      event.preventDefault();
      setFilteredItems(props.products.filter(item => {
        return item.title.toLowerCase() === search.toLowerCase();
      }))
      
      console.log(filteredItems)
      
     
    }
   
      const filteredListItems = filteredItems.map(item =><ItemCard 
        key={item.id} 
        id={item.id} 
        image={item.image}
        name={item.title} 
        description={item.description} 
        price={item.price}
        rating={item.rating.rate} />
      );
     
    

    const isZero = search.trim().length === 0;
    


    return (
      <Fragment>
      <section className={classes.summary}>
      <h2>This is an e-commerce website</h2>
      <div className={classes['search-section']}>
      <input type={Text} placeholder="Enter the item to search" onChange={titleChangeHandler}></input>
      <button className={classes.button} onClick={onClickHandler} >Search</button>
      </div>
    </section>
        <div className={classes.meals}>
        <Card>
            {isZero && listItems}
            {!isZero && filteredListItems}
        </Card>
        {/* <button onClick={fetchDataHandler}>Fetch</button> */}
        </div>
      
        </Fragment>
    )
}

export default AvailableItems;