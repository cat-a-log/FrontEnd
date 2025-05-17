import "./forms.css";
import { LoginButton} from "../Button";
import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router";

function FormLogin({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const {login} = useAuth();
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const forbiddenChars = /[&=+\,<>']|\,{2,}/;
    return !forbiddenChars.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!isEmailValid(newEmail)) {
      setEmailError("These symbols are not allowed &, =, ', +, ,, <, >, .");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEmailValid(email)) {
      await login(email, password);
      navigate("/home");
    } else {
      setEmailError("Please, introduce a valid email without special characters.");
      console.log("the email content characters not valid.");
    }
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <input
        className="form-email-password"
        type="email"
        required
        minLength="7"
        maxLength="20"
        placeholder="Email | Ex: julia@prettywoman.com"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className="error-message">{emailError}</p>}
      <input
        className="form-email-password"
        type="password"
        required
        minLength="4"
        maxLength="30"
        placeholder="Password | Minimun 4 characters"
         value={password}
        onChange={(event)=> setPassword(event.target.value)}
      />
       <div className="button">
        <LoginButton/>
      </div>
    </form>
  );
}

export default FormLogin;