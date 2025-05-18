import "./forms.css";
import { CreateBoxButton } from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postAPI } from "../../services/Api";

function FormCreateBox() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postAPI("/box", {
      name,
      location,
      description,
      color: "BLUE",
    });
    if (response.error === false) {
      navigate("/boxdetails/" + response.response.id);
    }
  if (response.response.name !== "") {
      setNameError(response.response.name);
    } else {
      setNameError("");
    }  
    if (response.response.location !== "") {
      setLocationError(response.response.location);
    } else {
      setLocationError("");
    }  
    if (response.response.description !== "") {
      setDescriptionError(response.response.description);
    } else {
      setDescriptionError("");
    }  
  };
  return (
    <form className="form-createBox" onSubmit={handleSubmit}>
      <input
        className="form-createBox-info"
        type="text"
        placeholder="Name your box | Ex: Christmas Deco"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {nameError && <p className="error-message">{nameError}</p>} 

      <input
        className="form-createBox-info"
        type="text"
        placeholder="Location of your box | Ex: Attic"
        required
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      {locationError && <p className="error-message">{locationError}</p>} 

      <input
        className="form-createBox-info"
        type="textarea"
        placeholder="Description of your box - max 100 characters"
        required
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      {descriptionError && <p className="error-message">{descriptionError}</p>} 
      <div className="button">
        <CreateBoxButton />
      </div>
    </form>
  );
}

export default FormCreateBox;
