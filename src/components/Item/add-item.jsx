import "./item.css";
import AddItemIcon from "/src/assets/add_item.svg"; 
import { useNavigate } from "react-router";


function AddItem({box}) {
const navigate = useNavigate();

const handleAddItemClick = () => {
  navigate('/additem/' + box.id);
};
  
  return (
    <button className="add-item-container" onClick={handleAddItemClick}> 
      <div className="image-container "> 
        <img src={AddItemIcon} alt="add_item_button" />
      </div>
      <div className="info-container">
        <h2 className="title">Add an Item</h2>
      </div>
    </button>
  );
}  

export default AddItem;