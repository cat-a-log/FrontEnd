import "./forms.css";
import { AddItemButton } from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postAPI, postAPIFormData } from "../../services/Api";

function FormAddItem({ box }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
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
    await postAPIFormData(`/box/${box.id}/item`, formData);
    navigate(`/boxdetails/${box.id}`);
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
        placeholder="Ex: Christmas Lights"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="quantity" className="form-label">
        Quantity
      </label>
      {quantityError && (
        <p className="error-message">&#10006; {quantityError}</p>
      )}
      <input
        id="quantity"
        className="form-info"
        type="number"
        placeholder="Ex: 2,572"
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
        <AddItemButton />
      </div>
    </form>
  );
}

export default FormAddItem;
