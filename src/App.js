import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { FaBars, FaPlus, FaUsers, FaWindows } from "react-icons/fa";

import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import "./App.scss";
import CardView from "./CardView/CardView";
import Customer from "./Customers/Customer";
import CustomerDetails from "./Detail/CustomerDetails";
import CustomerOrder from "./Detail/CustomerOrder";
import Detail from "./Detail/Detail";
import EditCustomer from "./Detail/EditCustomer";
import ListView from "./ListView/ListView";
import Login from "./Login/Login";
import NewCustomer from "./NewCustomer/NewCustomer";
import NotFound from "./NotFound/NotFound";
import NotFound2 from "./NotFound/NotFound2";
import Setting from "./Settings/Setting";

export const ThemeContext = createContext();
function App() {
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const users = localStorage.getItem("users");
  const user = JSON.parse(users);

  const handleLogout = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const user = localStorage.getItem("users");
    const body = JSON.parse(user);
    axios
      .post("http://localhost:8000/api/logout", body, config)
      .then(
        localStorage.removeItem("token"),
        navigate("/login"),
        console.log("Ban da thanh cong")
      )

      .catch(console.log("Ban da that bai"));
  };
  let isEmptyObj = Object.keys(user).length === 0;
  return (
    <div className="App">
      <div className="title-contain">
        <div className="manager">
          <FaUsers className="icon1" /> Customer Manager
        </div>
        <div className="navbar">
          <nav>
            <ul>
              {!token ? (
                <li className="">
                  <NavLink to="/login" className="link">
                    Login
                  </NavLink>{" "}
                </li>
              ) : (
                <>
                  <li className="left">
                    <NavLink
                      to="/card"
                      className="link"
                      onClick={() => setDetail(false)}
                    >
                      <FaWindows className="icon" /> Customer
                    </NavLink>
                  </li>
                  <li className="center">
                    <NavLink to="/setting" className="link">
                      <FaBars className="icon" /> Settings
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      to="/login"
                      className="link"
                      onClick={(e) => handleLogout(e)}
                    >
                      {isEmptyObj === false && <span>{user.email}</span>}
                      (Logout)
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <ThemeContext.Provider value={setDetail}>
        <Routes>
          {!token ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <>
              <Route path="/" element={<Customer detail={detail} />}>
                <Route path="card" element={<CardView />}>
                  <Route path=":id" element={<Detail />} />
                  <Route path=":id/CardDetail" element={<CustomerDetails />} />
                  <Route path=":id/ListDetail" element={<CustomerOrder />} />
                  <Route path=":id/Edit" element={<EditCustomer />} />
                </Route>

                <Route path="list" element={<ListView />} />
                <Route path="list/:id" element={<Detail />} />
                <Route path="news" element={<NewCustomer />} />
              </Route>
              <Route path="/setting" element={<Setting />} />
              <Route path="*" element={<NotFound2 />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
