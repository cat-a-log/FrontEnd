import Header from "../components/Header";
import { SignupButton} from "../components/Button";
import Footer from "../components/Footer";
import FormSignup from "../components/Forms/formSignup";
import TitleSignup from "../components/Titles/titleSignup";


function Signup() {
   
  return (
    <div className="container">
      <Header />
      <TitleSignup />
      <FormSignup />
      <div className="button">
        <SignupButton/>
      </div>
       <h4>Do you have an account? <a class ="highlight-color-underline" href="/login">Log in</a></h4>
      <Footer />
    </div>
  );
}

export default Signup;
