import Header from "../components/Header";
import { DeleteBoxButton, UpdateBoxButton } from "../components/Button";
import Footer from "../components/Footer";
import TitleBoxDetails from "../components/Titles/titleBoxDetails";
import BoxDetailsSection from "../components/BoxDetails-section";
import QR from "../components/QR";
import PopupDelete from "../components/Popups";

function BoxDetails() {
  return (
    <div className="container">
    
      <Header />
      <TitleBoxDetails />
      <div className="qr-in-page">
        <QR />
        <div className="buttons-double">
          <UpdateBoxButton />
          <DeleteBoxButton />
        </div>
      </div>
      <BoxDetailsSection />
      <Footer />
    </div>
  );
}

export default BoxDetails;
