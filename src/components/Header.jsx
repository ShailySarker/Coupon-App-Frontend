import React from 'react';
import { RiCoupon5Line } from 'react-icons/ri';

const Header = () => {
    return (
        <div className="sticky top-0 z-50 border-b-2 bg-white border-[#A21D3C] xl:px-24 lg:px-16 md:px-10 px-5 xl:py-6 lg:py-[14px] md:py-4 py-[14px] flex justify-between">
            <h2 className="font-bold text-[#A21D3C] xl:text-3xl md:text-2xl text-xl flex items-center gap-1"><RiCoupon5Line />Coupon App</h2>
            <div className="flex items-center gap-3">
                <button className='bg-[#A21D3C] xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-white rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-28 w-24'>Sign Up</button>
                <button className='hidden md:block border-2 border-[#A21D3C] xl:py-[10px] lg:py-2 md:py-[6px] py-1 text-[#A21D3C] rounded-3xl shadow-md px-4 font-semibold lg:text-base md:text-sm text-[13.8px] lg:w-28 w-24'>Sign In</button>
            </div>
        </div>
    );
};

export default Header;