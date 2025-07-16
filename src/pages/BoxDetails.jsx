
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
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);  
  const navigate = useNavigate();

  const handleUpdate = () => navigate("/updatebox/" + id);

  const handleDeleteClick = () => {
    setShowConfirmPopup(true); 
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteAPI(`/box/${id}`);
      console.log(`Box with ID ${id} deleted successfully`);
      navigate('/home');
    } catch (error) {
      console.error("Error deleting box:", error);
    } finally {
      setShowConfirmPopup(false);  
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmPopup(false);  
  };

  useEffect(() => {
    const getBox = async () => {
      try {
        const response = await getAPI("/box/" + id);
        setBox(response);
      } catch (error) {
        console.error("Error fetching box details:", error);
        
      }
    };
    getBox();
  }, [id]);  

  return (
    <>
      {box && (
        <>
          <TitleBoxDetails title={box.name} />
          <p>Description: {box.description}</p>
          <div className="qr-in-page">
            <QRCode
              className="qr-image"
              value={`${window.location.origin}/box-details-page/${id}`}
            />

            <div className="buttons-double">
              <UpdateBoxButton onClick={handleUpdate} />
              <DeleteBoxButton onClick={handleDeleteClick} />  
            </div>
          </div>
          <BoxDetailsSection items={box.items} box={box} />
        </>
      )}

      {showConfirmPopup && (
        <div className="confirm-popup-overlay">
          <div className="confirm-popup-content">
            <p>Are you sure you want to delete this box with all the items?</p>
            <div className="confirm-popup-buttons">
              <button onClick={handleConfirmDelete} className="confirm-button yes">Yes</button>
              <button onClick={handleCancelDelete} className="confirm-button no">No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BoxDetails;