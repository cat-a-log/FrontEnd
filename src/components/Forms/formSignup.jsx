import "./forms.css";
import { SignupButton} from "../Button";
import { useState } from "react";
import { useAuth } from "../../AuthContext";

function FormSignup() {
   const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup} = useAuth()
    const handleSubmit = async (event) => {
      event.preventDefault()
      const signUp = await signup(email, password)
      console.log (signUp)
    }
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
        onChange={(event)=> setEmail(event.target.value)}
      />
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
