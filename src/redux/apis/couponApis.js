import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const fetchCoupons = createAsyncThunk("coupons/fetchCoupons", async () => {
    const response = await axios.get(`${baseURL}/coupons`);
    console.log("All coupons: ", response?.data)
    return response?.data;
});

export const claimCoupon = createAsyncThunk("coupons/claimCoupon", async () => {
    const response = await axios.post(`${baseURL}/coupons/claim`);
    console.log("New Coupon: ", response?.data)
    return response?.data;
});
