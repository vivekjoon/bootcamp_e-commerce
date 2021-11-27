import { useState } from "react";
import { Route, Switch } from "react-router";
import Cart from "./components/Cart/Cart";
import Order from "./components/Cart/checkout/Order";
import Payment from "./components/Cart/checkout/Payment";
import ShippingDetails from "./components/Cart/checkout/ShippingDetails";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";
import ProductDetail from "./components/product-detail/ProductDetail";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const [data, setData] = useState([])

  const showCartHandler = () => {
     setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const onGetData = (receivedData) => {
    const fetched = {
      ...receivedData
    }
    setData(fetched);
  }
console.log(data)
  return (
    <CartProvider>
      <Switch>
     <Route path="/" exact>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Items onfetchData={onGetData}/>
      </main>
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail product={data}/>
      </Route>
      <Route path="/shipping-details">
        <ShippingDetails />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      </Switch>
    </CartProvider>
    
    );
}

export default App;
