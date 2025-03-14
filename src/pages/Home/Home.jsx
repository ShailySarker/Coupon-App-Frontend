import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { claimCoupon, fetchCoupons } from '../../redux/apis/couponApis';
import CouponCard from './Components/CouponCard';

const Home = () => {
    const dispatch = useDispatch();
    const { coupons, status, error } = useSelector((state) => state?.coupons);

    useEffect(() => {
        dispatch(fetchCoupons());
    }, [dispatch]);

    const handleClaimCoupon = () => {
        dispatch(claimCoupon());
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Available Coupons</h1>
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    coupons?.length > 0 ?
                        <>
                            {
                                coupons?.map((coupon) => (
                                    <CouponCard key={coupon?._id} coupon={coupon} />
                                ))
                            }
                        </> :
                        <div>
                            <p></p>
                        </div>
                }
            </div>
            <button
                onClick={handleClaimCoupon}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Claim Coupon
            </button>
        </div>
    );
};

export default Home;