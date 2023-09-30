import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/registerSlice";
import loginReducer from "./slices/loginSlice";
import categoriesReducer from "./slices/categoriesSlice";
import reviewsReducer from "./slices/reviews/reviewsSlice";
import addReviewReducer from "./slices/reviews/addReviewSlice";
import productsReducer from "./slices/products/productsSlice";
import addToCartReducer from "./slices/cart/addToCartSlice";
import notificationsReducer from "./slices/notificationsSlice";
import productReducer from "./slices/products/productSlice";
import contactusReducer from "./slices/contactusSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    categories: categoriesReducer,
    reviews: reviewsReducer,
    addReview: addReviewReducer,
    products: productsReducer,
    product: productReducer,
    addToCart: addToCartReducer,
    notifications: notificationsReducer,
    contactus: contactusReducer,
  },
});

export default store;
