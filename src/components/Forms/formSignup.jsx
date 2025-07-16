// import "./forms.css";
// import { SignupButton } from "../Button";
// import { useState } from "react";
// import { useAuth } from "../../AuthContext";
// import { useNavigate } from "react-router";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function FormSignup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { signup } = useAuth();
//   const navigate = useNavigate();

//   const isEmailValid = (email) => {
//     const forbiddenChars = /[&=+\,<>']|\,{2,}/;
//     return !forbiddenChars.test(email);
//   };

//   const handleEmailChange = (event) => {
//     const newEmail = event.target.value;
//     setEmail(newEmail);
//     if (!isEmailValid(newEmail)) {
//       setEmailError("These symbols are not allowed &, =, ', +, ,, <, >, .");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (isEmailValid(email)) {
//       const signUp = await signup(email, password);
//       console.log(signUp);
//       navigate('/login?signup');
//     } else {
//       setEmailError(
//         "Please, introduce a valid email without special characters."
//       );
//       console.log("the email content characters not valid.");
//     }
//   };

//   return (
//     <form className="form-login" onSubmit={handleSubmit}>
//       <input
//         className="form-email-password"
//         type="email"
//         required
//         minLength="7"
//         maxLength="20"
//         placeholder={`\uD83D\uDCE7 Email | Ex: julia@prettywoman.com`}
//         value={email}
//         onChange={handleEmailChange}
//       />
//       {emailError && <p className="error-message">{emailError}</p>}

//       <div className="password-input-container">
//         <input
//           className="form-email-password"
//           type={showPassword ? "text" : "password"}
//           required
//           minLength="4"
//           maxLength="30"
//           placeholder={`\uD83D\uDD12 Password | Minimun 4 characters`}
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <button
//           type="button"
//           className="password-toggle-button"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <FaEyeSlash /> : <FaEye />}
//         </button>
//       </div>

//       <div className="button">
//         <SignupButton />
//       </div>
//     </form>
//   );
// }

// export default FormSignup;


import "./forms.css";
import { SignupButton } from "../Button";
import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function FormSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const forbiddenChars = /[&=+\,<>']|\,{2,}/;
    return emailRegex.test(email) && !forbiddenChars.test(email);
  };

  const isPasswordValid = (password) => {
    const minLength = 4; 
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber
    );
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!isEmailValid(newEmail)) {
      setEmailError("❌  Please introduce a valid email.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (!isPasswordValid(newPassword)) {
      setPasswordError(
        "❌  The password must have at least 4 characters, including uppercase, lowercase and a number."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailIsValid = isEmailValid(email);
    const passwordIsValid = isPasswordValid(password);

    if (!emailIsValid) {
      setEmailError("Please introduce a valid email.");
    }
    if (!passwordIsValid) {
      setPasswordError(
        "The password must have at least 4 characters, including uppercase, lowercase and a number."
      );
    }

    if (emailIsValid && passwordIsValid) {
      try {
        await signup(email, password);
        navigate('/login?signup');
      } catch (error) {
        setEmailError("Error in the register. The email could be already in use or a problem with the conection.");
      }
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
        placeholder={`📧 Email | Ej: julia@example.com`}
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className="error-message">{emailError}</p>}

      <div className="password-input-container">
        <input
          className="form-email-password"
          type={showPassword ? "text" : "password"}
          required
          minLength="4"
          maxLength="30"
          placeholder={`🔒 Password`}
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          type="button"
          className="password-toggle-button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {passwordError && <p className="error-message">{passwordError}</p>}

      <div className="button">
        <SignupButton />
      </div>
    </form>
  );
}

export default FormSignup;