
import FormSignup from "../components/Forms/formSignup";
import TitleSignup from "../components/Titles/titleSignup";


function Signup() {
   
  return (
    <>
      <TitleSignup />
      <FormSignup />
      
       <h4>Do you have an account? <a className ="highlight-color-underline" href="/login">Log in</a></h4>
      
    </>
  );
}

export default Signup;
