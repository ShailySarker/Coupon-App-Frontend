import { createSlice } from "@reduxjs/toolkit";
import { claimCoupon, fetchCoupons } from "../apis/couponApis";

const couponSlice = createSlice({
    name: "coupons",
    initialState: { coupons: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoupons.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCoupons.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.coupons = action.payload;
            })
            .addCase(fetchCoupons.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(claimCoupon.fulfilled, (state, action) => {
                state.coupons = state.coupons.map((coupon) =>
                    coupon._id === action.payload.coupon._id ? action.payload.coupon : coupon
                );
            });
    },
});

// export const { searchPosts } = couponSlice.actions;
export default couponSlice.reducer;
