import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./header.css"
import Logged from "/src/assets/profile_icon.svg"; 


function Header() {
var login = false;
   return (
      <nav>
            <div className="divLogo">
                <Link to={"/home"}>
                    <img className="logo" src={logo} alt="Catalog logo" />
                    </Link>
            </div>
            {login ? <div className="divPages">
                <Link to={"/login"} className="divLink">Login</Link>
                <Link to={"/signup"} className="divLink">Sign Up</Link>
            </div>
            :<div className="divPages">
                <Link to={"/search"} className="divLink">Search</Link>
                <Link to={"/createBox"} className="divLink">Create a Box</Link> 
                <img class="profile-icon" src={Logged} alt="user logged icon" />    
            </div>
}
        </nav>
   )

}
export default Header