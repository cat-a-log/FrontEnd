import Header from "../components/Header";
import { CreateBoxButton} from "../components/Button";
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
      <div className="button">
        <CreateBoxButton/>
      </div>
        <EmptySection/>
      <Footer/>
    </div>
  );
}

export default CreateBox;
