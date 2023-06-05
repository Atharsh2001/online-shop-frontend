import Header from "../Components/Header";
import {Space} from "antd";
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import "./index.css"
import SideBarResponsive from "../Components/SideMenu";

function DashBoard() {
    return (
        <div className="dashBoard">
            <Header userName="Atharsh"/>
            <Space className="SideMenuAndBody">
                <SideBarResponsive/>
                <Body/>
            </Space>
            <Footer/>
        </div>
    );
}

export default DashBoard;