import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/registerSlice";
import hotelsReducer from "./slices/hotels/hotelsSlice";
import hotelReducer from "./slices/hotels/hotelSlice";
import roomsReducer from "./slices/rooms/roomsSlice";
import roomReducer from "./slices/rooms/roomSlice";
import loginReducer from "./slices/loginSlice";
import updateProfileReducer from "./slices/updateProfileSlice";
import categoriesReducer from "./slices/categories/categoriesSlice";
import reviewsReducer from "./slices/reviews/reviewsSlice";
import addReviewReducer from "./slices/reviews/addReviewSlice";
import productsReducer from "./slices/products/productsSlice";
import addToCartReducer from "./slices/cart/addToCartSlice";
import notificationsReducer from "./slices/notifications/notificationsSlice";
import productReducer from "./slices/products/productSlice";
import contactusReducer from "./slices/contactusSlice";
import cartItemsReducer from "./slices/cart/cartItemsSlice";
import updateCartReducer from "./slices/cart/updateCartSlice";
import ordersReducer from "./slices/orders/ordersSlice";
import createOrderReducer from "./slices/orders/createOrderSlice";
import deleteOrderReducer from "./slices/orders/deleteOrderSlice";
import categoryProductsReducer from "./slices/categories/categoryProductsSlice";
import searchReducer from "./slices/products/searchSlice";
import orderReducer from "./slices/orders/orderSlice";
import usesReducer from "./slices/categories/usesSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    hotels: hotelsReducer,
    hotel: hotelReducer,
    rooms: roomsReducer,
    room: roomReducer,
    login: loginReducer,
    upadteProfile: updateProfileReducer,
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    uses: usesReducer,
    reviews: reviewsReducer,
    addReview: addReviewReducer,
    products: productsReducer,
    product: productReducer,
    searchProducts: searchReducer,
    cartItems: cartItemsReducer,
    addToCart: addToCartReducer,
    updateCart: updateCartReducer,
    orders: ordersReducer,
    order: orderReducer,
    createOrder: createOrderReducer,
    deleteOrder: deleteOrderReducer,
    notifications: notificationsReducer,
    contactus: contactusReducer,
  },
});

export default store;
