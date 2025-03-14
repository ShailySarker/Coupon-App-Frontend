import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoupons = createAsyncThunk("coupons/fetchCoupons", async () => {
    const response = await axios.get("/api/coupons");
    return response?.data;
});

export const claimCoupon = createAsyncThunk("coupons/claimCoupon", async () => {
    const response = await axios.post("/api/coupons/claim");
    return response?.data;
});
