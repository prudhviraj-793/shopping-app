import { useDispatch, useSelector } from 'react-redux';
import { cartButtonActions } from '../../store/cartButtonSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.addToCart.totalQuantity)
  const dispatch = useDispatch()
  function clickHandler(e) {
    e.preventDefault()
    dispatch(cartButtonActions.showCartItems())
  }
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
