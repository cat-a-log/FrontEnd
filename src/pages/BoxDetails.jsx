import { DeleteBoxButton, UpdateBoxButton } from "../components/Button";

import TitleBoxDetails from "../components/Titles/titleBoxDetails";
import BoxDetailsSection from "../components/BoxDetails-section";
import QR from "../components/QR";
import PopupDelete from "../components/Popups";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getAPI } from "../services/Api";
import { useNavigate } from "react-router";

function BoxDetails() {
  const { id } = useParams();
  const [box, setBox] = useState(null);
  const navigate = useNavigate();
  const handleUpdate=() => navigate("/updatebox/" + id)


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
            <QR />
            <div className="buttons-double">
              <UpdateBoxButton onClick={handleUpdate} />
              <DeleteBoxButton />
            </div>
          </div>
          <BoxDetailsSection items={box.items} />
        </>
      )}
    </>
  );
}

export default BoxDetails;
