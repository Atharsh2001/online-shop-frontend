import Header from "../Components/Header";
import {Space} from "antd";
import SideMenu from "../Components/SideMenu";
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import "./index.css"

function DashBoard() {
    return (
        <div className="dashBoard">
            <Header userName="Atharsh"/>
            <Space className="SideMenuAndBody">
                <SideMenu/>
                <Body/>
            </Space>
            <Footer/>
        </div>
    );
}

export default DashBoard;