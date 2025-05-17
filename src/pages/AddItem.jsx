import Header from "../components/Header";
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
      
        <EmptySection/>
      <Footer/>
    </div>
  );
}

export default AddItem;
