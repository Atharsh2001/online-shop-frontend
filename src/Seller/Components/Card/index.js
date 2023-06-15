import './index.css';
import {DeleteOutlined, EditOutlined, SettingOutlined} from "@ant-design/icons";
import {Descriptions, Skeleton} from "antd";

function Card({productDetails}) {
    const getStatusColor = (status) => {
        if (status === "SUBMITTED") {
            return "#8fd883"
        }
        if (status === "APPROVED") {
            return "#f1c122"
        }
        if (status === "REJECTED") {
            return "#e56767"
        }
        if (status === "PUBLISHED") {
            return "#fa8c0e"
        }
        if (status === "DRAFTED") {
            return "rgb(222,238,251)"
        }
        return "#8fd883"
    }
    return (
        <div className="card">
            {productDetails.length > 0 ? (
                productDetails.map(((product) => (
                    <Skeleton loading={false} active key={product.id}>
                        <div className="card-container">
                            <div className="image-container">
                                <div className="head-img">
                                <img src={product.imageUrl} alt="" />
                                </div>
                                <div className="text-on-img" style={{backgroundColor:getStatusColor(product.status)}}>{product.status}</div>
                            </div>
                            <div className="card-content" style={{fontSize:20}}>
                                <Descriptions bordered>
                                    <Descriptions.Item label="Product" span={3}><h3>{product.productName}</h3></Descriptions.Item>
                                    <Descriptions.Item label="Price" span={3}><h3>
                                        {product.price+" "}₹</h3>
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Stock" span={3}><h3>5</h3></Descriptions.Item>
                                </Descriptions>
                                <div className="card-btn" >
                                    <button className="btn" title="Settings"><SettingOutlined className="btn-antd" /></button>
                                    <button className="btn" title="Edit"><EditOutlined className="btn-antd" /></button>
                                    <button className="btn" title="Delete"><DeleteOutlined className="btn-antd"/></button>
                                </div>
                            </div>
                        </div>
                    </Skeleton>
                )))
            ) : (
                <img className="noProductImg" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1684929438~exp=1684930038~hmac=559a21ce1e58d38867d61ab7e4e8848dd0f976d805f5278fce6cbe57c0941fc2" alt=""/>
            )}
        </div>
    );
}

export default Card;
