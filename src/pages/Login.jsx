import Header from "../components/Header";
import { LoginButton} from "../components/Button";
import Footer from "../components/Footer";
import TitleLogin from "../components/Titles/titleLogin";
import FormLogin from "../components/Forms/formLogin";

function Login() {
   
  return (
    <div className="container">
      <Header />
      <TitleLogin />
      <FormLogin />
      <div className="button">
        <LoginButton/>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
