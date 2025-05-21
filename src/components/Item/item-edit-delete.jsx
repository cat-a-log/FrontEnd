import './item.css'
import { useNavigate } from 'react-router'
import { deleteAPI } from "../../services/Api";


function Item({item, box}) {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate (`/updateitem/${item.id}`)
    }

    const handleDelete = async () => {
         const itemId = item.id;
       if (window.confirm(`Are you sure do you want to delete the item: ${item.name}?`)) {
          try {
            await deleteAPI(`/item/${itemId}`); 
            console.log(`Item with ID ${itemId} deleted successfully`); 
            navigate(`/boxdetails/${box.id}`); 
          } catch (error) {
            console.error("Error deleting box:", error);
          }  
        }
      };

   return (
    
   <div className="item-container">
        <div className="image-container">
            <img src="/src/assets/item_christmas.png" alt="Christmas Lights"/>
        </div>
        <div className="info-container">
            <h2 className="title">{item.name}</h2>
            <p className="quantity">Quantity: {item.quantity}</p>
            <p className="date">{item.createdAt.substring(0,10)}</p>
        </div>
        <div className="icons-container">
            <button className="edit-button" onClick={handleEdit}>
                <i className="fas fa-pencil"></i>
                <span className="action-text-active">EDIT</span>
            </button>
            <div className="separator"></div>
            <button className="delete-button" onClick={handleDelete}>
                <i className="fa-regular fa-trash-can"></i>
                <span className="action-text">DELETE</span>
            </button>
        </div>
    </div>
    
   )

}

export default Item