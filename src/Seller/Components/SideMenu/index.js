import "./index.css"
import {Menu} from "antd";
import {AppstoreOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate()
    return <div className="Side-menu">
        <Menu
            onClick={(item)=>{
                navigate(item.key)
            }}
            items={[
            {
                label: "Dashboard",
                key: "/",
                icon: <AppstoreOutlined style={{fontSize:20}}/>

            },
            {
                label: "My Products",
                key: "/seller/products",
                icon: <ShoppingCartOutlined style={{fontSize:20}}/>
            },
            {
                label: "Account",
                key: "/seller/account",
                icon: <UserOutlined style={{fontSize:20}}/>
            }
        ]} className="sideMenuItems" />
    </div>;
}
export default SideMenu;