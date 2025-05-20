import './item.css'

function Item({item}) {

   return (
    
   <div className="item-container">
        <div className="image-container">
            <img src="/src/assets/item_christmas.png" alt="Christmas Lights"/>
        </div>
        <div className="info-container">
            <h2 className="title">{item.name}</h2>
            <p className="quantity">{item.quantity}</p>
            <p className="date">{item.createdAt}</p>
        </div>
        <div className="icons-container">
            <button className="edit-button">
                <i className="fas fa-pencil"></i>
                <span className="action-text-active">EDIT</span>
            </button>
            <div className="separator"></div>
            <button className="delete-button">
                <i className="fa-regular fa-trash-can"></i>
                <span className="action-text">DELETE</span>
            </button>
        </div>
    </div>
    
   )

}
export default Item