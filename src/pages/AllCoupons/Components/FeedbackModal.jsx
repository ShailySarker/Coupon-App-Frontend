import React, { useState } from "react";

const FeedbackModal = ({ show, onClose, couponCode }) => {
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        console.log("Feedback submitted:", feedback);
        onClose(); 
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-xl font-bold mb-4">Feedback for Coupon: {couponCode}</h2>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    rows="4"
                    placeholder="Enter your feedback..."
                    value={feedback}
                    onChange={(e) => setFeedback(e?.target?.value)}
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-[#A21D3C] text-white px-4 py-2 rounded-lg hover:bg-[#8a1a33]"
                    >
                        Submit Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;