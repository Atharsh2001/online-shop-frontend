import Card from "../../../Components/Card";
import "./index.css"
import {FilterOutlined, PlusOutlined} from "@ant-design/icons";
import productData from "./productDetails.json"
import {useState} from "react";
import AddProduct from "../../../Components/AddProduct";

function MyProductPage() {
    const productDetails = productData;
    const [isAddProduct, setIsAddProduct] = useState(false)
    const toggleAddProduct = (value) => {
        setIsAddProduct(value)
    }
    return (<div className="productpage">
        <div className="product-topBar">
            <div className="productPath">
                <div>
                    <button className="productPathBtn" onClick={() => toggleAddProduct(false)}> My Products</button>
                </div>
                <div>
                    <p> /</p>
                </div>
                <div style={{display: isAddProduct ? "block":"none"}}>
                    <button className="productPathBtn" onClick={() => toggleAddProduct(true)}>New Product</button>
                </div>
            </div>
            <div>
                <button className="btn1" style={{fontWeight: "bold"}} onClick={() => toggleAddProduct(true)}> Add
                    <PlusOutlined style={{fontSize: 24, paddingLeft: 10, fontWeight: "bold"}}/>
                </button>
                <button className="btn1">
                    <FilterOutlined style={{fontSize: 24}}/>
                </button>
            </div>
        </div>
        <div>
            {isAddProduct ? (
                <AddProduct/>
            ) : (
                <Card productDetails={productDetails}/>
            )}
        </div>
    </div>)
        ;
}

export default MyProductPage;