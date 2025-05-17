import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleLogin from "../components/Titles/titleLogin";
import FormLogin from "../components/Forms/formLogin";


function Login() {
   
  return (
    <div className="container">
      <Header />
      <TitleLogin />
      <FormLogin/>
     
      <h4>Not register yet? <a class ="highlight-color-underline" href="/signup">Sign up</a></h4>
      <Footer/>
      
    </div>
  );  
}

export default Login;
