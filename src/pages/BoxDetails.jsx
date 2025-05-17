
import { DeleteBoxButton, UpdateBoxButton } from "../components/Button";

import TitleBoxDetails from "../components/Titles/titleBoxDetails";
import BoxDetailsSection from "../components/BoxDetails-section";
import QR from "../components/QR";
import PopupDelete from "../components/Popups";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function BoxDetails() {
  const {id} = useParams ();
  const [box, setBox] = useState (null)
    useEffect (()=> {
      const getBox = async() => {
        try {
          const response = await getAPI ("/box/" + id)
          setBox (response.content)
        } catch {
  
        }
      }
      getBox();
    },[])
  return (
    <>
      <TitleBoxDetails />
      <div className="qr-in-page">
        <QR />
        <div className="buttons-double">
          <UpdateBoxButton />
          <DeleteBoxButton />
        </div>
      </div>
      <BoxDetailsSection />
     
    </>
  );
}

export default BoxDetails;
