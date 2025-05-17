import "./forms.css";
import { SignupButton} from "../Button";
import { useState } from "react";
import { useAuth } from "../../AuthContext";

function FormSignup() {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const {signup} = useAuth();

    const isEmailValid = (email) => {
      const forbiddenChars = /[&_=+\-,<>']|\.{2,}/;
      return !forbiddenChars.test(email);
    };

    const handleEmailChange = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      if (!isEmailValid(newEmail)) {
        setEmailError("This symbols are not allowed &, =, _, ', -, +, ,, <, >, .");
      } else {
        setEmailError(""); 
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (isEmailValid(email)) {
        const signUp = await signup(email, password);
        console.log (signUp);
      } else {
        setEmailError("Please, introduce a valid email without special characters.");
        console.log("the email content characters not valid.");
      }
    };

  return (
     <form className="form-login"  onSubmit={handleSubmit}>
      <input
        class="form-email-password"
        type="email"
        required
        minlength="7"
        maxlength="20"
        placeholder="Email | Ex: julia@prettywoman.com"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className="error-message">{emailError}</p>} {}
       <input
        class="form-email-password"
        type="password"
        required
        minlength="4"
        maxlength="30"
        placeholder="Password | Minimun 4 characters"
         value={password}
        onChange={(event)=> setPassword(event.target.value)}
      />
      <div className="button">
        <SignupButton/>
      </div>
    </form>
  );
}

export default FormSignup;