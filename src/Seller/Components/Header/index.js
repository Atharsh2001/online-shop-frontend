import "./index.css"
import {Image, Space, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";

function Header({userName}) {
    return <div className="Header">
        <Image width={70}
               className="Thumbnail"
               src="https://yt3.googleusercontent.com/ytc/AGIKgqOBphlJcJdB4MNTSoYKIq0_iHGAH_Wx5Y3-KnXXeg=s176-c-k-c0x00ffffff-no-rj"/>
        <Space style={{marginRight:30}}>
            <UserOutlined style={{fontSize: 25}}/>
            <Typography.Text style={{fontSize:18}}>{userName}</Typography.Text>
        </Space>
    </div>;
}
export default Header;