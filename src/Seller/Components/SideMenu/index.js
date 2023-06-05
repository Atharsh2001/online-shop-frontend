import {AppstoreOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import "./index.css"
import {useState} from "react";
import {FaBars} from "react-icons/fa";
function SideBarResponsive() {
    const [isOpen, setOpen] = useState(true);
    const menuItems = [
        {
            label: "Dashboard",
            key: "/",
            icon: <AppstoreOutlined style={{fontSize:25}}/>

        },
        {
            label: "My Product",
            key: "/seller/products",
            icon: <ShoppingCartOutlined style={{fontSize:25}}/>
        },
        {
            label: "Account",
            key: "/seller/account",
            icon: <UserOutlined style={{fontSize:25}}/>
        }
    ]

    function toogleOpen() {
        if (isOpen){
            setOpen(false)
        } else {
            setOpen(true)
        }

    }

    return (
        <div className="sidebar-container" style={{width: isOpen ? "13rem" : "3rem"}}>
            <div className="sideBar">
                <div className="sidebar-topmenu">
                    <FaBars onClick={toogleOpen} style={{fontSize:22}}/>
                    <h3 className="sidebar-menuHeading" style={{display: isOpen ? "block" : "none"}}>Menu</h3>
                </div>
                <div>
                {
                    menuItems.map((item, index) => (
                        <NavLink to={item.key} key={index} className="link">
                            <div className="sidebar-icon">{item.icon}</div>
                            <div className="sidebar-label" style={{display: isOpen ? "block" : "none"}}>{item.label}</div>
                        </NavLink>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default SideBarResponsive;