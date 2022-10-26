import { addToCartActions } from "../../store/addToCartSlice";
import { notificationActions } from "../../store/notificationSlice";

export function sendData(data) {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        showNotification: true,
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    async function sendRequest() {
      const response = await fetch(
        "https://shopping-app-aba3f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: data.items,
            totalQuantity: data.totalQuantity,
          }),
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
    await sendRequest();
  };
}

export function getData() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://shopping-app-aba3f-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("error found");
      }
      const data = await response.json();
      return data;
    }
    try {
      const cartData = await fetchData();
      dispatch(
        addToCartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          showNotification: true,
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        })
      );
    }
  };
}
