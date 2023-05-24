import './index.css';
import {DeleteTwoTone, EditTwoTone, SettingTwoTone} from "@ant-design/icons";

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
                <div className="card-btn" >
                    <button className="btn" title="Settings"><SettingTwoTone className="btn-antd" /></button>
                    <button className="btn" title="Edit"><EditTwoTone className="btn-antd" /></button>
                    <button className="btn" title="Delete"><DeleteTwoTone className="btn-antd"/></button>
                </div>
            </div>
        </div>
    );
}

export default Card;
