import { Fragment, useState, useEffect } from "react"
import AvailableItems from "./AvailableItems"



const Items = (props) => {
    const [products, setProducts] = useState([]);

      useEffect(() => {
        const fetchApi = async() => {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
          props.onfetchData(products);
          console.log(data);
        };
        fetchApi();
      }, []);
    return (
        <Fragment>
            <AvailableItems products={products}/>
        </Fragment>
    )
}

export default Items;