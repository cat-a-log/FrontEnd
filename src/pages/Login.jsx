
import TitleLogin from "../components/Titles/titleLogin";
import FormLogin from "../components/Forms/formLogin";


function Login() {
   
  return (
    <>
     
      <TitleLogin />
      <FormLogin/>
     
      <h4>Not register yet? <a className ="highlight-color-underline" href="/signup">Sign up</a></h4>
     
      
    </>
  );  
}

export default Login;
