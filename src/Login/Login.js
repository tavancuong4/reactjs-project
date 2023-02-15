import React, { useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8000/api/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          navigate("/");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem(
            "users",
            JSON.stringify({ email: email, password: password })
          );
        })
        .catch((err) => {
          alert("You entered the wrong email or password ");
        });
    } catch (error) {
      alert("You the wrong sever ");
    }
  };
  return (
    <div className="form-login">
      <h1>
        <FaLock className="mb-3" /> Login
      </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
