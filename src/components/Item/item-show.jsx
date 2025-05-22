import './item.css'

function ItemShow() {

   return (
    
   <div className="item-container">
        <div className="image-container">
            <img src="/src/assets/item_christmas.png" alt="Christmas Lights"/>
        </div>
        <div className="info-container">
            <h2 className="title">Christmas Lights</h2>
            <p className="location-item">Attic</p>
            <p className="quantity">105</p>
            <p className="date">22-08-2023</p>
        </div>
        <div className="icons-container">
            <div className="separator"></div>
            <button className="show-button">
                <i className=""></i>
                <span className="action-text">SHOW</span>
            </button>
        </div>
    </div>
    
   )

}
export default ItemShow