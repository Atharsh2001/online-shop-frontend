import {Route, Routes} from "react-router-dom";
import DashBoardContent from "../../DashBoard/Pages/DashBoardContent";
import MyProductPage from "../../DashBoard/Pages/MyProduct";
import MyAccountPage from "../../DashBoard/Pages/MyAccount";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/seller/dashboard" element={<DashBoardContent/>}></Route>
            <Route path="/seller/products" element={<MyProductPage/>}></Route>
            <Route path="/seller/account" element={<MyAccountPage/>}></Route>
        </Routes>
    )
}

export default AppRoutes;