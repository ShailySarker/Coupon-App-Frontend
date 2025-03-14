import React from "react";

const CouponCard = ({ coupon }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{coupon?.code}</h3>
            <p>{coupon?.claimedBy ? "Claimed" : "Available"}</p>
        </div>
    );
};

export default CouponCard;