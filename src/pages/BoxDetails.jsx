
import { DeleteBoxButton, UpdateBoxButton } from "../components/Button";

import TitleBoxDetails from "../components/Titles/titleBoxDetails";
import BoxDetailsSection from "../components/BoxDetails-section";
import QR from "../components/QR";
import PopupDelete from "../components/Popups";

function BoxDetails() {
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
