import { useParams } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./ProductDetail.module.css";
import dummyImg from '../../assets/ecommerce.png'

const ProductDetail = (props) => {
  const params = useParams();
  console.log(props.name)
  
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.upper}>
          <div className={classes.left}>
            <img src={dummyImg}/>
          </div>
          <div className={classes.right}>
              <div className={classes.title}>
            <h1>Product Title</h1>
            <p>Rating</p>
            </div>
            <div className={classes.selection}>
              <p>$1000</p>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <p className={classes.description}>Product description</p>
            <hr />
            <button>Add to Cart</button>
          </div>
        </div>
        <div className={classes.bottom}>
            <h1>Reviews</h1>
            <div className={classes.cards}>
                <div className={classes.cardLeft}>
                    <img />
                    <p>Name</p>
                    <p>Date</p>
                    <p>Rating</p>
                </div>
                <div className={classes.cardRight}>
                    <p>Review details</p>
                    </div>
            </div>


        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
