import React, { useContext, useState } from "react";
import { FaBars, FaPlus, FaWindows } from "react-icons/fa";
import {
  Route,
  Routes,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import CardView from "../CardView/CardView";
import ListView from "../ListView/ListView";
import NewCustomer from "../NewCustomer/NewCustomer";
import "./Customer.scss";
import { Outlet } from "react-router-dom";
import Detail from "../Detail/Detail";

import CustomerDetails from "../Detail/CustomerDetails";
import CustomerOrder from "../Detail/CustomerOrder";
import EditCustomer from "../Detail/EditCustomer";
import { ThemeContext } from "../App";

const Customer = (props) => {
  // const [detail, setDetail] = useState(false);
  // const navigate = useNavigate();
  // console.log("detail:", detail);
  const { id } = useParams();
  const courses = [
    { type: "CardDetail" },
    { type: "ListDetail" },
    { type: "Edit" },
  ];
  return (
    <div className="contain-container">
      <div className="navbar">
        <nav>
          {props.detail === false ? (
            <ul className="topnav">
              <li>
                <NavLink to="/card" className="link">
                  <FaWindows className="icon" />
                  Card View
                </NavLink>
              </li>
              <li>
                <NavLink to="/list" className="link">
                  <FaBars className="icon" />
                  List View
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="link">
                  <FaPlus className="icon" />
                  New Customer
                </NavLink>
              </li>
            </ul>
          ) : (
            <>
              <h3> Customer Information</h3>
              <ul className="topnav">
                {courses.map((course, index) => (
                  <li key={index}>
                    <NavLink
                      to={"/card/" + id + "/" + course.type}
                      className="link"
                    >
                      <FaWindows className="icon" />
                      {course.type}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
      </div>

      <Routes>
        <Route path="/card" element={<CardView />} />
        {/* <Route path="/card/:id" element={<Detail courses={courses} />} /> */}
        <Route path="/card/:id" element={<></>} />
        <Route path="/card/:id/CardDetail" element={<CustomerDetails />} />
        <Route path="/card/:id/ListDetail" element={<CustomerOrder />} />
        <Route path="/card/:id/Edit" element={<EditCustomer />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/list/:id" element={<Detail />} />
        <Route path="/news" element={<NewCustomer />} />
      </Routes>
    </div>
  );
};

export default Customer;
