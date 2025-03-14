import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { claimCoupon, fetchCoupons } from '../../redux/apis/couponApis';
import CouponCard from './Components/CouponCard';
import { ImSad } from 'react-icons/im';

const AllCoupons = () => {
    const dispatch = useDispatch();
    const { coupons, status, error } = useSelector((state) => state?.coupons);

    useEffect(() => {
        dispatch(fetchCoupons());
    }, [dispatch]);

    const handleClaim = async (couponId) => {
        try {
            await dispatch(claimCoupon(couponId)).unwrap(); // Claim the coupon
        } catch (error) {
            console.error("Error claiming coupon:", error);
        }
    };
    return (
        <div className="xl:px-24 lg:px-16 md:px-10 px-5 xl:py-7 lg:py-[18px] md:py-4 py-[10px]">
            <h1 className="xl:text-2xl md:text-xl text-lg font-bold text-center">Available Coupons</h1>
            {
                status === "loading" ?
                    <p className='flex items-center justify-center gap-3 xl:h-[300px] md:h-[320px] h-[250px] xl:text-xl lg:text-lg text-base font-medium text-black'>Loading...</p> :
                    <>
                        {
                            status === "failed" ?
                                <p className='flex items-center justify-center gap-3 xl:h-[300px] md:h-[320px] h-[250px] xl:text-xl lg:text-lg text-base font-medium text-red-500'>{error}</p> :
                                <div className='xl:my-10 lg:my-9 md:my-5 my-4 '>
                                    {
                                        coupons?.length > 0 ?
                                            <>
                                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                    {
                                                        coupons?.map((coupon) => (
                                                            <CouponCard key={coupon?._id} coupon={coupon} onClaim={handleClaim} />
                                                        ))
                                                    }
                                                </div>
                                            </> :
                                            <div className='flex justify-center mx-auto'>
                                                <p className='flex items-center justify-center gap-3 xl:h-[300px] md:h-[320px] h-[250px] xl:text-xl lg:text-lg text-base font-medium text-[#A21D3C]'><ImSad className='xl:text-3xl lg:text-2xl md:text-xl' />Sorry, no coupon is available now!</p>
                                            </div>
                                    }
                                </div>
                        }
                    </>
            }

            
        </div>
    );
};

export default AllCoupons;