import Header from "../components/Header";
import { AddItemButton} from "../components/Button";
import Footer from "../components/Footer";
import TitleAddItem from "../components/Titles/titleAddItem";
import EmptySection from "../components/Empty-section";
import FormAddItem from "../components/Forms/formAddItem";

function AddItem() {
   
  return (
    <div className="container">
      <Header />
      <TitleAddItem />
      <FormAddItem />
      <div className="button">
        <AddItemButton/>
      </div>
        <EmptySection/>
      <Footer/>
    </div>
  );
}

export default AddItem;
