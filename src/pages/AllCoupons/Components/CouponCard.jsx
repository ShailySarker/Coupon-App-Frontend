import React, { useState } from "react";
import { MdOutlineEventAvailable } from "react-icons/md";
import { claimCoupon } from "../../../redux/apis/couponApis";
import { useDispatch } from "react-redux";
import FeedbackModal from "./FeedbackModal";

const CouponCard = ({ coupon, onClaim }) => {
    const dispatch = useDispatch();
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    const handleClaimCoupon = async () => {
        try {
            const response = await dispatch(claimCoupon(coupon?._id));
            // console.log("Coupon Claimed: ", response); 
            setShowFeedbackModal(true);
        } catch (error) {
            console.error("Error claiming coupon:", error);
        }
    };
    return (
        <div className="bg-[#a21d3c60] flex flex-col justify-center items-center gap-4 lg:p-5 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{coupon?.code}</h3>
            <p className="font-medium flex items-center gap-4">
                {coupon?.claimedBy ? "Claimed" : "Available"} <MdOutlineEventAvailable className="text-lg" />
            </p>
            {!coupon?.claimedBy && (
                <button
                    onClick={handleClaimCoupon}
                    className="xl:mt-3 bg-[#A21D3C] lg:py-2 md:py-[6px] py-1 text-white rounded-3xl shadow-md px-4 font-semibold lg:text-[15px] md:text-sm text-[13.8px] lg:w-36 w-36 hover:bg-[#8a1a33]"
                >
                    Claim Coupon
                </button>
            )}
            {/* Feedback Modal */}
            <FeedbackModal
                show={showFeedbackModal}
                onClose={() => setShowFeedbackModal(false)}
                couponCode={coupon?.code}
            />
        </div>
    );
};

export default CouponCard;