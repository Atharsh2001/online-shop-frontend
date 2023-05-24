import Card from "../../../Components/Card";
import "./index.css"
import {Skeleton, Space} from "antd";
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
            {productDetails.length > 0 ? (
                productDetails.map(((product) => (
                    <Skeleton loading={false} active key={product.id}>
                        <Card
                            prodName={product.productName}
                            price={product.price}
                            shortDesc={product.shortDesc}
                            imgUrl={product.imageUrl}
                        />
                    </Skeleton>
                )))
            ) : (
                <img className="noProductImg" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1684929438~exp=1684930038~hmac=559a21ce1e58d38867d61ab7e4e8848dd0f976d805f5278fce6cbe57c0941fc2" alt=""/>
            )}
        </div>
    </div>;
}

export default MyProductPage;