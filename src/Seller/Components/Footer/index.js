import "./index.css"
import {FacebookFilled, TwitterCircleFilled, YoutubeFilled} from "@ant-design/icons";
import {Space} from "antd";

function Footer() {
    return <div className="Footer">
        <Space>
            <FacebookFilled style={{fontSize: 25, paddingLeft:8}}/>
            <TwitterCircleFilled style={{fontSize: 25,paddingLeft:8}}/>
            <YoutubeFilled style={{fontSize: 25,paddingLeft:8}}/>
        </Space>
    </div>;
}
export default Footer;