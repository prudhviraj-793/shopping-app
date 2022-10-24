import { useDispatch, useSelector } from "react-redux";
import { quanityActions } from "../../store/quantitySlice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const item = useSelector(state => state.addToCart.cartItems)
  const { title, total, price } = item;
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity.quantity);

  function increaseQuantityHandler(e) {
    e.preventDefault();
    dispatch(quanityActions.increaseQuantity());
  }

  function decreaseQuantityHandler(e) {
    e.preventDefault();
    dispatch(quanityActions.decreaseQuantity());
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
