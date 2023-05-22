import Card from "../../../Components/Card";
import "./index.css"
import {Space} from "antd";
import {FilterOutlined} from "@ant-design/icons";
import productData from "./productDetails.json"

function MyProductPage() {
    const productDetails = productData;

    return <div className="productpage">
        <Space style={{display: "flex", justifyContent: "space-between"}}>
            <p className="productPath" style={{fontSize: "20px"}}> My products ></p>
            <FilterOutlined style={{fontSize: 24}}/>
        </Space>
        <div className="card">
        {productDetails.map(((product) => (
            <Card
                prodName= {product.id}
                price= {product.price}
                shortDesc= {product.shortDesc}
                imgUrl= {product.imageUrl}
            />
        )))}
        </div>
    </div>;
}

export default MyProductPage;