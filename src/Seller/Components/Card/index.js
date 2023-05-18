import "./index.css"
function Card({prodName,shortDesc,imgUrl,price}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imgUrl} alt=""/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{prodName}</h3>
                </div>
                <div className="card-body">
                    <p>{shortDesc}</p>
                </div>
            </div>
            <div className="card-btn">
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Card;
