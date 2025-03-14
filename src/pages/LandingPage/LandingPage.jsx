import React from 'react';
import { RiCoupon5Line } from 'react-icons/ri';

const LandingPage = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate("/posts");
    //     }, 3000);
    //     return () => clearTimeout(timer);
    // }, [navigate]);

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex items-center justify-center gap-3 text-[#A21D3C] animate-bounce">
                <RiCoupon5Line className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl" />
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">Coupon App</h1>
            </div>
        </div>
    );
};

export default LandingPage;