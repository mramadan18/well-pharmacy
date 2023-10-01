import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/registerSlice";
import hotelsReducer from "./slices/hotelsSlice";
import roomsReducer from "./slices/roomsSlice";
import loginReducer from "./slices/loginSlice";
import updateProfileReducer from "./slices/updateProfileSlice";
import categoriesReducer from "./slices/categoriesSlice";
import reviewsReducer from "./slices/reviews/reviewsSlice";
import addReviewReducer from "./slices/reviews/addReviewSlice";
import productsReducer from "./slices/products/productsSlice";
import addToCartReducer from "./slices/cart/addToCartSlice";
import notificationsReducer from "./slices/notificationsSlice";
import productReducer from "./slices/products/productSlice";
import contactusReducer from "./slices/contactusSlice";
import cartReducer from "./slices/cart/cartSlice";
import updateCartReducer from "./slices/cart/updateCartSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer,
    login: loginReducer,
    upadteProfile: updateProfileReducer,
    categories: categoriesReducer,
    reviews: reviewsReducer,
    addReview: addReviewReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    addToCart: addToCartReducer,
    updateCart: updateCartReducer,
    notifications: notificationsReducer,
    contactus: contactusReducer,
  },
});

export default store;
