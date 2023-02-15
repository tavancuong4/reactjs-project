import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import "./Detail.scss";

const EditCustomer = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  // const [state, setState] = useState({ abbreviation: "", name: " " });
  const setDetail = useContext(ThemeContext);

  const { id } = useParams();

  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(`http://localhost:8000/api/customers/${id}`);
        let data = res && res.data ? res.data : [];
        setDataUser(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setAddress(data.address);
        setCity(data.city);
        setState(data.state.name);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    setFirstName("");
    setLastName("");
    setAddress("");
    setCity("");
    setState("");
    axios
      .delete(`http://localhost:8000/api/customers/${id}`, config)
      .then((res) => {
        console.log("Ban da thanh cong", res);
      })
      .catch((err) => {
        console.log("Ban da that bai: ", err);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setAddress("");
    setCity("");
    setState("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let body = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: { abbreviation: "", name: state },
    };
    console.log("state", state);
    axios
      .put(`http://localhost:8000/api/customers/${id}`, body, config)
      .then((res) => {
        console.log("Ban da thanh cong", res);
      })
      .catch((err) => {
        console.log("Ban da that bai: ", err);
      });
  };
  let isEmptyObj = Object.keys(dataUser).length === 0;
  return (
    <div className="form-container">
      {isEmptyObj === false && (
        <form>
          <div className="row">
            <label htmlFor="fname">First name:</label>
            <input
              type="text"
              name="fname"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="lname">Last name:</label>
            <input
              type="text"
              name="lname"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
          </div>
          <div className="row">
            <div className="one">
              <button className="delete" onClick={(e) => handleDelete(e)}>
                Delete
              </button>
              <button className="cancel" onClick={(e) => handleCancel(e)}>
                Cancel
              </button>
              <button className="insert" onClick={(e) => handleUpdate(e)}>
                Update
              </button>
            </div>
          </div>
        </form>
      )}

      <div
        className="bottom"
        onClick={() => {
          navigate("/card");
          setDetail(false);
        }}
      >
        View all Customers
      </div>
    </div>
  );
};

export default EditCustomer;
