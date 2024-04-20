// src/redux/reducers.js
import { combineReducers } from "redux";
import productsReducer from "./slices/productsSlice";
import userReducer from "./slices/userSlice";
import allUsersReducer from "./slices/allUsersSlice";
import detailReducer from "./slices/detailSlice";
import filteredReducer from "./slices/filteredSlice"
import myOrdersReducer from "./slices/myOrdersSlice"
import orderDetailReducer from "./slices/orderDetailSlice"
import productsPerPageReducer from "./slices/productsPerPage"
import cartReducer from "./slices/cartSlice"
import storage from "redux-persist/lib/storage";
import categoryReducer from "./slices/categorySlice";
import ratingReducer from "./slices/editRatingSlice";
import { persistReducer } from "redux-persist";


const userPersistConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  orderDetail: orderDetailReducer,
  rating: ratingReducer,
  myOrders: myOrdersReducer,
  category: categoryReducer,
  filtered: filteredReducer,
  cart:cartReducer,
  detail: detailReducer,
  productsPerPage: productsPerPageReducer,
  products: productsReducer,
  allUsers: allUsersReducer,
});

export default rootReducer;
