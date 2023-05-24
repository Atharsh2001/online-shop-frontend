import "./index.css"
import {Image, Space, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";

function Header({userName}) {
    return <div className="Header">
        <Image width={70}
               className="Thumbnail"
               src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1684921634~exp=1684922234~hmac=3fea805dbf3e78b717f0d2f46f31c940db13d2f1bd193c3d2464c568950b3456"/>
        <Space style={{marginRight:30}}>
            <UserOutlined style={{fontSize: 25}}/>
            <Typography.Text style={{fontSize:18}}>{userName}</Typography.Text>
        </Space>
    </div>;
}
export default Header;