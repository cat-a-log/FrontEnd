import Header from "../components/Header";
import { SignupButton} from "../components/Button";
import Footer from "../components/Footer";
import FormSignup from "../components/Forms/formSignup";
import TitleSignup from "../components/Titles/titleSignup";
import EmptySection from "../components/Empty-section";

function Signup() {
   
  return (
    <div className="container">
      <Header />
      <TitleSignup />
      <FormSignup />
      <div className="button">
        <SignupButton/>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
