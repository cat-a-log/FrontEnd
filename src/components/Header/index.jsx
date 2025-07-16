// import logo from "../../assets/logo.png"
// import { Link } from "react-router-dom"
// import "./header.css"
// import Logged from "/src/assets/profile_icon.svg"; 
// import { useAuth } from "../../AuthContext";


// function Header() {
//  const { user} = useAuth();
//    return (
//       <nav>
//             <div className="divLogo">
//                 <Link to={"/home"}>
//                     <img className="logo" src={logo} alt="Catalog logo" />
//                     </Link>
//             </div>
//             {user == null ? <div className="divPages">
//                 <Link to={"/login"} className="divLink">Login</Link>
//                 <Link to={"/signup"} className="divLink">Sign Up</Link>
//             </div>
//             :<div className="divPages">
//                 <Link to={"/createBox"} className="divLink">Create a Box</Link> 
//                 <img className="profile-icon" src={Logged} alt="user logged icon" />    
//             </div>
// }
//         </nav>
//    )

// }
// export default Header

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./header.css";
import Logged from "/src/assets/profile_icon.svg";
import { useAuth } from "../../AuthContext";
import { useState } from "react";

function Header() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
    <nav>
      <div className="divLogo">
        <Link to={"/home"}>
          <img className="logo" src={logo} alt="Catalog logo" />
        </Link>
      </div>
      {user == null ? (
        <div className="divPages">
          <Link to={"/login"} className="divLink">
            Login
          </Link>
          <Link to={"/signup"} className="divLink">
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="divPages">
          <Link to={"/createBox"} className="divLink">
            Create a Box
          </Link>
          <div className="dropdown-container">
            <img
              className="profile-icon"
              src={Logged}
              alt="user logged icon"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Header;