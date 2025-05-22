import { DeleteBoxButton, UpdateBoxButton } from "../components/Button";

import TitleBoxDetails from "../components/Titles/titleBoxDetails";
import BoxDetailsSection from "../components/BoxDetails-section";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getAPI, deleteAPI } from "../services/Api";
import { useNavigate } from "react-router";

import QRCode from "react-qr-code";

function BoxDetails() {
  const { id } = useParams();
  const [box, setBox] = useState(null);
  const navigate = useNavigate();
  const handleUpdate = () => navigate("/updatebox/" + id);

  const handleDelete = async () => {
    if (window.confirm("¿Are you sure do you want to delete this box with all the items?")) {
      try {
        await deleteAPI(`/box/${id}`);
        console.log(`Box with ID ${id} deleted successfully`);
        navigate('/home'); 
      } catch (error) {
        console.error("Error deleting box:", error);
        
      }
    }
  };

  useEffect(() => {
    const getBox = async () => {
      try {
        const response = await getAPI("/box/" + id);

        setBox(response);
      } catch (error) {}
    };
    getBox();
  }, []);

  return (
    <>
      {box && (
        <>
          <TitleBoxDetails title={box.name} />
          <p> Description: {box.description}</p>
          <div className="qr-in-page">
            <QRCode
              className="qr-image"
              value={`${window.location.origin}/box-details-page/${id}`}
            />

            <div className="buttons-double">
              <UpdateBoxButton onClick={handleUpdate} />
              <DeleteBoxButton onClick={handleDelete} />
            </div>
          </div>
          <BoxDetailsSection items={box.items} box={box} />
        </>
      )}
    </>
  );
}

export default BoxDetails;
