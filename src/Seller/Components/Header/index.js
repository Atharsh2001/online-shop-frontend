import "./index.css"
import {Image, Space, Typography} from "antd";
import {SettingFilled} from "@ant-design/icons";

function Header({userName}) {
    return <div className="Header">
        <Space>
        <Image width={90}
               className="Thumbnail"
               src="https://yt3.googleusercontent.com/ytc/AGIKgqOBphlJcJdB4MNTSoYKIq0_iHGAH_Wx5Y3-KnXXeg=s176-c-k-c0x00ffffff-no-rj"/>
        <Typography.Title level={3}
                          style={{marginLeft: 40}}
        >{userName}</Typography.Title>
        </Space>
        <Space style={{marginRight:30}}>
            <SettingFilled style={{fontSize: 35}}/>
        </Space>
    </div>;
}
export default Header;