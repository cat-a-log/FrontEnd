import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Login from "../pages/Login"
import Signup from "../pages/Signup"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

        </BrowserRouter>

    )

}

export default Router