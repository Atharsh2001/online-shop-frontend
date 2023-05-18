import "./index.css"
import {Menu} from "antd";
import {AppstoreOutlined, ShopFilled, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";

function SideMenu() {
    return <div className="Side-menu">
        <Menu items={[
            {
                label: "Dashboard",
                key: "/",
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