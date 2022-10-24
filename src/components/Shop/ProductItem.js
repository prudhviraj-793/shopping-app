import { useDispatch } from 'react-redux';
import { addToCartActions } from '../../store/addToCartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch()

  function addToCartHandler(e) {
    e.preventDefault()
    dispatch(addToCartActions.addToCart({title: "Test Item", quantity: 3, total: 18, price: 6}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
