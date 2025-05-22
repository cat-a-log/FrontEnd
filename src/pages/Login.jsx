
import TitleLogin from "../components/Titles/titleLogin";
import FormLogin from "../components/Forms/formLogin";
import { useSearchParams } from "react-router";


function Login() {
   const [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
     
      <TitleLogin />
      {searchParams.has("signup") && <p>You sign up correctly, please Log in</p>}
      <FormLogin/>
     
      <h4>Not register yet? <a className ="highlight-color-underline" href="/signup">Sign up</a></h4>
     
      
    </>
  );  
}

export default Login;
