import "./item.css";
import AddItemIcon from "/src/assets/add_item.svg"; 

function AddItem() {
  return (
    <button className="add-item-container"> 
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