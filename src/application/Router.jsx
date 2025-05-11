import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Home from "../pages/Home"
import Search from "../pages/Search"
import AddItem from "../pages/AddItem"
import CreateBox from "../pages/CreateBox"



function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/createbox" element={<CreateBox />} />
                <Route path="/additem" element={<AddItem />} />
            </Routes>

        </BrowserRouter>

    )

}

export default Router