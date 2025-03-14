import { configureStore } from "@reduxjs/toolkit";
import couponSlice from "../slices/couponSlice";
export const store = configureStore({
    reducer: {
        coupons: couponSlice,
    },
  });