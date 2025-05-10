import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./header.css"



function Header() {
var login = false;
   return (
      <nav>
            <div className="divLogo">
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="Catalog logo" />
                    </Link>
            </div>
            {login ? <div className="divPages">
                <Link to={"/login"} className="divLink">Login</Link>
                <Link to={"/signup"} className="divLink">Sign Up</Link>
            </div>
            :<div className="divPages">
                <Link to={"/home"} className="divLink">Search</Link>
                <Link to={"/signup"} className="divLink">Create a Box</Link>
            </div>
}
        </nav>
   )

}
export default Header