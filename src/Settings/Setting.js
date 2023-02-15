import React, { useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FaUsers } from "react-icons/fa";
import "./Setting.scss";
import axios from "axios";

const Setting = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numberPage, setNumberPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const validateAll = () => {
    const msg = {};
    if (!currentEmail) {
      msg.currentEmail = "Please input currentEmail";
    } else if (!newEmail) {
      msg.newEmail = "Please input newEmail";
    } else if (!password) {
      msg.password = "Please input password";
    } else if (!numberPage) {
      msg.numberPage = "Please input numberPage";
    } else if (newEmail === currentEmail) {
      msg.newEmail = "Please enter different from currentEmail";
    }
    setErrorMessage(msg);
    if (Object.keys(msg).length > 0) return false;

    return true;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const validate = validateAll();
    if (!validate) return;
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {
      currentEmail: currentEmail,
      newEmail: newEmail,
      password: password,
      numberPerPage: numberPage,
    };
    axios
      .post("http://localhost:8000/api/users", body, config)
      .then(
        localStorage.setItem(
          "users",
          JSON.stringify({ email: newEmail, password: password })
        ),
        console.log("Ban da thanh cong")
      )
      .catch(console.log("Ban da that bai"));
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setCurrentEmail("");
    setNewEmail("");
    setPassword("");
    setNumberPage("");
  };
  return (
    <div className="form-setting">
      <h1>
        <FaUsers className="icon" /> Setting
      </h1>
      <Form className="container">
        <Form.Group className="mb-3">
          <Form.Label>Current Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Current email"
            value={currentEmail}
            onChange={(e) => setCurrentEmail(e.target.value)}
          />
          <span>{errorMessage.currentEmail}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="New email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <span>{errorMessage.newEmail}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{errorMessage.password}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of page</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number page"
            value={numberPage}
            onChange={(e) => setNumberPage(e.target.value)}
          />
          <span>{errorMessage.numberPage}</span>
        </Form.Group>

        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="save"
            onClick={(e) => handleSave(e)}
          >
            Save
          </Button>
          <Button
            variant="danger"
            type="submit"
            onClick={(e) => handleCancel(e)}
          >
            Cancel
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Setting;
