import { Route, Routes } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import LandingPage from "../pages/LandingPage/LandingPage";
import AllCoupons from "../pages/AllCoupons/AllCoupons";

const Routers = () => {
    return (
        <Routes>
            <Route
                index
                element={<LandingPage />}
            />
            <Route
                path="/"
                element={<MainLayouts />}
            >
                <Route
                    path="/all-coupons"
                    element={<AllCoupons />}
                />
            </Route>
        </Routes>
    );
};

export default Routers;