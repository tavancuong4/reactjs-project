import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import userNam from "../images/nam.jpg";
import userNu from "../images/nu.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Detail.scss";
import { ThemeContext } from "../App";

const CustomerDetails = (props) => {
  const [dataUser, setDataUser] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const setDetail = useContext(ThemeContext);
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(`http://localhost:8000/api/customers/${id}`);
        let data = res && res.data ? res.data : [];
        setDataUser(data);
        // props.setTitle(true);
      } catch (e) {
        console.error(e);
      }
      console.log("check data:", dataUser);
    })();
  }, []);
  console.log("dataUser", dataUser);
  let isEmptyObj = Object.keys(dataUser).length === 0;

  return (
    <div className="customerDetail">
      <div className="container">
        {isEmptyObj === false && (
          <>
            <div className="image">
              {dataUser.gender === "male" ? (
                <img src={userNam} alt="" />
              ) : (
                <img src={userNu} alt="" />
              )}
            </div>
            <div className="name">
              {dataUser.firstName} - {dataUser.lastName}
            </div>
            <div>{dataUser.address}</div>
            <div>
              {dataUser.city},{dataUser.state.name}
            </div>
          </>
        )}
      </div>
      <div className="bottom">
        <div
          className="home"
          onClick={() => {
            navigate("/card");
            setDetail(false);
          }}
        >
          View all Customers
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
