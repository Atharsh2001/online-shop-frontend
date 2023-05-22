import {Space} from 'antd';
import './index.css';
import {DeleteOutlined, EditOutlined, SettingOutlined} from "@ant-design/icons";

function Card({ prodName, shortDesc, imgUrl, price }) {

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imgUrl} alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{prodName}</h3>
                </div>
                <div className="card-body">
                    <p>{shortDesc}</p>
                </div>
                <div className="card-title">
                    <h4>{price} $</h4>
                </div>
                <Space className="card-btn" >
                    <button className="btn" title="Settings"><SettingOutlined className="btn-antd" /></button>
                    <button className="btn" title="Edit"><EditOutlined className="btn-antd" /></button>
                    <button className="btn" title="Delete"><DeleteOutlined className="btn-antd"/></button>


                </Space>
            </div>
        </div>
    );
}

export default Card;
