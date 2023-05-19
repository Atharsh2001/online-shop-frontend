import "./index.css"
import {Menu} from "antd";
import {AppstoreOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate()
    return <div className="Side-menu">
        <Menu
            mode="vertical"
            onClick={(item)=>{
                navigate(item.key)
            }}
            items={[
            {
                label: "Dashboard",
                key: "/seller/dashboard",
                icon: <AppstoreOutlined/>

            },
            {
                label: "My Products",
                key: "/seller/products",
                icon: <ShoppingCartOutlined />
            },
            {
                label: "Account",
                key: "/seller/account",
                icon: <UserOutlined/>
            }
        ]} className="sideMenu" />
    </div>;
}
export default SideMenu;