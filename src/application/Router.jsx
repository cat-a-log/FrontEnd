import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Home from "../pages/Home"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
            </Routes>

        </BrowserRouter>

    )

}

export default Router