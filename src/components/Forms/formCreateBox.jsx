import "./forms.css";
import { CreateBoxButton, UpdateBoxButton } from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postAPI, patchAPI } from "../../services/Api";

function FormCreateBox({box}) {
  const [name, setName] = useState(box ? box.name : "");
  const [location, setLocation] = useState(box ? box.location :"");
  const [description, setDescription] = useState(box ? box.description :"");
  const [nameError, setNameError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (box){
      await patchAPI(
      "/box/" + box.id, {
      name,
      location,
      description,
      color: "BLUE",
    });
    navigate("/boxdetails/" + box.id)
    return
  }
   
    const response = await postAPI(
      "/box", {
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
   <form className="form-style" onSubmit={handleSubmit}>
  <label htmlFor="name" className="form-label">
    Name your Box
  </label>\
  {nameError && <p className="error-message">&#10006; {nameError}</p>}
  <input
    id="name"
    className="form-info"
    type="text"
    placeholder="Ex: Christmas Deco"
    required
    value={name}
    onChange={(event) => setName(event.target.value)}
  />
  

  <label htmlFor="location" className="form-label">
    Location
  </label>
    {locationError && <p className="error-message">&#10006; {locationError}</p>}

  <input
    id="location"
    className="form-info"
    type="text"
    placeholder="Ex: Attic"
    required
    value={location}
    onChange={(event) => setLocation(event.target.value)}
  />

  <label htmlFor="description" className="form-label">
    Description
  </label>
    {descriptionError && <p className="error-message">&#10006; {descriptionError}</p>}
  <input
    id="description"
    className="form-textarea"
    type="textarea"
    placeholder="Description of your box - max 100 characters"
    required
    value={description}
    onChange={(event) => setDescription(event.target.value)}
  />


  <div className="button">
   
    {box ? <UpdateBoxButton /> : <CreateBoxButton />}
  </div>
</form>
  );
}

export default FormCreateBox;
