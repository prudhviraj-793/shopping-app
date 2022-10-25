import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { notificationActions } from "./store/notificationSlice";

function App() {
  const showCart = useSelector((state) => state.cart.showCartItems);
  const cart = useSelector((state) => state.addToCart.items);
  const dispatch = useDispatch();
  const notification = useSelector(
    (state) => state.notification
  );

  useEffect(() => {
    async function updateCart() {
      dispatch(
        notificationActions.showNotification({
          showNotification: true,
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://shopping-app-aba3f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        dispatch(
          notificationActions.showNotification({
            showNotification: true,
            status: "error",
            title: "Error",
            message: "Sending cart data failed",
          })
        );
      }
      dispatch(
        notificationActions.showNotification({
          showNotification: true,
          status: "success",
          title: "Success",
          message: "Sending cart data successfully!",
        })
      );
    }
    updateCart();
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification.showNotification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
