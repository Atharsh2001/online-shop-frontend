import "./index.css"
import {Image, Space} from "antd";
import {SettingFilled} from "@ant-design/icons";

function Header({userName}) {
    return <div className="Header">
        <Space>
        <Image width={90}
               className="Thumbnail"
               src="https://yt3.googleusercontent.com/ytc/AGIKgqOBphlJcJdB4MNTSoYKIq0_iHGAH_Wx5Y3-KnXXeg=s176-c-k-c0x00ffffff-no-rj"/>
        <h2 style={{marginLeft:45}}>{userName}</h2>
        </Space>
        <Space style={{marginRight:30}}>
            <SettingFilled style={{fontSize: 30}}/>
        </Space>
    </div>;
}
export default Header;