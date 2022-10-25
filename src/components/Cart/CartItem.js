import { useDispatch } from "react-redux";
import { addToCartActions } from "../../store/addToCartSlice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, total, quantity, price, id } = props.item;
  const dispatch = useDispatch();
  function increaseQuantityHandler(e) {
    e.preventDefault();
    dispatch(
      addToCartActions.addToCart({
        id,
        title,
        price,
      })
    );
  }

  function decreaseQuantityHandler(e) {
    e.preventDefault();
    dispatch(addToCartActions.removeFromCart(id));
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
