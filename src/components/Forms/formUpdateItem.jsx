import "./forms.css";
import { UpdateItemButton } from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import {patchAPIFormData} from "../../services/Api"

function FormUpdateItem({item}) {
  const navigate = useNavigate();
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [nameError, setNameError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [image, setImage] = useState(null); 

  const handleSubmit = async (event) => {
    event.preventDefault();
     const formData = new FormData();
    const itemRequestDto = {
      name: name,
      quantity: quantity,
    };
    formData.append(
      "item",
      new Blob([JSON.stringify(itemRequestDto)], { type: "application/json" })
    );
    if (image) {
      formData.append("image", image);
    }
    await patchAPIFormData(`/item/${item.id}`, formData);
    navigate(`/boxdetails/${item.boxId}`);
    
  
   };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <label htmlFor="itemName" className="form-label">
        Name your Item
      </label>
      {nameError && <p className="error-message">&#10006; {nameError}</p>}
      <input
        id="itemName"
        className="form-info"
        type="text"
        required
        placeholder="Ex: Christmas Lights"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="quantity" className="form-label">
        Quantity 
      </label>
      {quantityError && <p className="error-message">&#10006; {quantityError}</p>}
      <input
        id="quantity"
        className="form-info"
        type="number"
        required
        placeholder="Ex: 25"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />

      <label htmlFor="image" className="form-label">
        Add image - Optional
      </label>
      <input
        id="image"
        className="form-addimage"
        type="file"
        onChange={handleImageChange}
      />
      <div className="button">
        <UpdateItemButton />
      </div>
    </form>
  );
}

export default FormUpdateItem;