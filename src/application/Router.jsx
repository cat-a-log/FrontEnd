import { BrowserRouter, Route, Routes } from "react-router";
import App from "../pages/App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Search from "../pages/Search";
import AddItem from "../pages/AddItem";
import CreateBox from "../pages/CreateBox";
import UpdateBox from "../pages/UpdateBox";
import BoxDetails from "../pages/BoxDetails";
import UpdateItem from "../pages/UpdateItem";
import { AuthProvider } from "../AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../Layout";

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route element = {<ProtectedRoute />}>
                <Route path="home" element={<Home /> } />
                <Route path="search" element={<Search />} />
                <Route path="createbox" element={<CreateBox />} />
                <Route path="updatebox/:id" element={<UpdateBox />} />
                <Route path="additem/:id" element={<AddItem />} />
                <Route path="boxdetails/:id" element={<BoxDetails />} />
                <Route path="updateitem/:id" element={<UpdateItem />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
