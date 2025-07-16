

// import './item.css';
// import { useNavigate } from 'react-router';
// import { deleteAPI } from "../../services/Api";
// import { useState } from 'react';

// function Item({ item, box }) {
//     const navigate = useNavigate();
//     const [showConfirmPopup, setShowConfirmPopup] = useState(false); 

//     const handleEdit = () => {
//         navigate(`/updateitem/${item.id}`);
//     };

//     const imageUrl = `http://localhost:8080/api/item/${item.id}/image`;

//     const handleDeleteClick = () => {
//         setShowConfirmPopup(true); 
//     };

//     const handleConfirmDelete = async () => {
//         const itemId = item.id;
//         try {
//             await deleteAPI(`/item/${itemId}`);
//             console.log(`Item with ID ${itemId} deleted successfully`);
//             navigate(`/boxdetails/${box.id}`); 
//         } catch (error) {
//             console.error("Error deleting item:", error);
//         } finally {
//             setShowConfirmPopup(false);  
//         }
//     };

//     const handleCancelDelete = () => {
//         setShowConfirmPopup(false);  
//     };

//     return (
//         <div className="item-container">
//             <div className="image-container">
//                 <img src={imageUrl} alt={item.name} />
//             </div>
//             <div className="info-container">
//                 <h2 className="title">{item.name}</h2>
//                 <p className="quantity">Quantity: {item.quantity}</p>
//                 <p className="date">{item.createdAt.substring(0, 10)}</p>
//             </div>
//             <div className="icons-container">
//                 <button className="edit-button" onClick={handleEdit}>
//                     <i className="fas fa-pencil"></i>
//                     <span className="action-text-active">EDIT</span>
//                 </button>
//                 <div className="separator"></div>
//                 <button className="delete-button" onClick={handleDeleteClick}> 
//                     <i className="fa-regular fa-trash-can"></i>
//                     <span className="action-text">DELETE</span>
//                 </button>
//             </div>

//             {showConfirmPopup && (
//                 <div className="confirm-popup-overlay">
//                     <div className="confirm-popup-content">
//                         <p>Are you sure you want to delete the item: {item.name}?</p>
//                         <div className="confirm-popup-buttons">
//                             <button onClick={handleConfirmDelete} className="confirm-button yes">Yes</button>
//                             <button onClick={handleCancelDelete} className="confirm-button no">No</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Item;

import './item.css';
import { useNavigate } from 'react-router';
import { deleteAPI } from "../../services/Api";
import { useState } from 'react';

function Item({ item, box, onItemsChanged }) {
    const navigate = useNavigate();
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    const handleEdit = () => {
        navigate(`/updateitem/${item.id}`);
    };

    const imageUrl = `http://localhost:8080/api/item/${item.id}/image`;

    const handleDeleteClick = () => {
        setShowConfirmPopup(true);
    };

    const handleConfirmDelete = async () => {
        const itemId = item.id;
        try {
            await deleteAPI(`/item/${itemId}`);
            console.log(`Item with ID ${itemId} deleted successfully`);
            onItemsChanged();
        } catch (error) {
            console.error("Error deleting item:", error);
        } finally {
            setShowConfirmPopup(false);
        }
    };

    const handleCancelDelete = () => {
        setShowConfirmPopup(false);
    };

    return (
        <div className="item-container">
            <div className="image-container">
                <img src={imageUrl} alt={item.name} />
            </div>
            <div className="info-container">
                <h2 className="title">{item.name}</h2>
                <p className="quantity">Quantity: {item.quantity}</p>
                <p className="date">{item.createdAt.substring(0, 10)}</p>
            </div>
            <div className="icons-container">
                <button className="edit-button" onClick={handleEdit}>
                    <i className="fas fa-pencil"></i>
                    <span className="action-text-active">EDIT</span>
                </button>
                <div className="separator"></div>
                <button className="delete-button" onClick={handleDeleteClick}>
                    <i className="fa-regular fa-trash-can"></i>
                    <span className="action-text">DELETE</span>
                </button>
            </div>

            {showConfirmPopup && (
                <div className="confirm-popup-overlay">
                    <div className="confirm-popup-content">
                        <p>Are you sure you want to delete the item: {item.name}?</p>
                        <div className="confirm-popup-buttons">
                            <button onClick={handleConfirmDelete} className="confirm-button yes">Yes</button>
                            <button onClick={handleCancelDelete} className="confirm-button no">No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Item;