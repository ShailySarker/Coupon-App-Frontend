import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://coupon-app-backend.onrender.com/api";
// const baseURL = "http://localhost:5000/api";

export const fetchCoupons = createAsyncThunk("coupons/fetchCoupons", async () => {
    const response = await axios.get(`${baseURL}/coupons`);
    return response?.data;
});

export const claimCoupon = createAsyncThunk("coupons/claimCoupon", async (couponId, { getState }) => {
    const response = await axios.post(`${baseURL}/coupons/${couponId}/claim`);
    return response?.data;
});
