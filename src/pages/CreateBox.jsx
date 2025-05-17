import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleCreateBox from "../components/Titles/titleCreateBox";
import FormCreateBox from "../components/Forms/formCreateBox";
import EmptySection from "../components/Empty-section";

function CreateBox() {
   
  return (
    <div className="container">
      <Header />
      <TitleCreateBox />
      <FormCreateBox />
     
        <EmptySection/>
      <Footer/>
    </div>
  );
}

export default CreateBox;
