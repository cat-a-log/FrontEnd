import "./forms.css";
import { LoginButton} from "../Button";
import { useState } from "react";
import { useAuth } from "../../AuthContext";

function FormLogin({}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login} = useAuth()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const logIn = await login(email, password)
    console.log (logIn)
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <input
        class="form-email-password"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event)=> setEmail(event.target.value)}
      />
       <input
        class="form-email-password"
        type="password"
        placeholder="Password"
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
