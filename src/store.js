import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import couponReducer from "./couponSlice";
import orderReducer from "./orderSlice";
import authReducer from "./authSlice";

const store = configureStore({

reducer:{

cart:cartReducer,

couponDetails:couponReducer,

orders:orderReducer,

auth:authReducer

}

});

export default store;