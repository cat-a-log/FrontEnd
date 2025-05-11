import Header from "../components/Header";
import { CreateBoxButton} from "../components/Button";
import Footer from "../components/Footer";
import TitleCreateBox from "../components/Titles/titleCreateBox";
import FormCreateBox from "../components/Forms/formCreateBox";

function CreateBox() {
   
  return (
    <div className="container">
      <Header />
      <TitleCreateBox />
      <FormCreateBox />
      <div className="button">
        <CreateBoxButton/>
      </div>
      <Footer />
    </div>
  );
}

export default CreateBox;
