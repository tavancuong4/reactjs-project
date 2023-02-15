import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./NewCustomer.scss";
import axios from "axios";

const NewCustomer = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      address: "",
      city: "",
      state: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .min(3, "ít nhất 3 ký tự")
        .max(10, "ko quá 10 ký tự")
        .required("Vui lòng nhập dô!"),
      lname: Yup.string()
        .min(2, "ít nhất 3 ký tự")
        .max(15, "ko quá 15 ký tự")
        .required("Vui lòng nhập dô!"),
      address: Yup.string()
        .min(5, "ít nhất 5 ký tự")
        .max(40, "ko quá 40 ký tự")
        .required("Vui lòng nhập dô!"),
      city: Yup.string()
        .min(2, "ít nhất 2 ký tự")
        .max(15, "ko quá 15 ký tự")
        .required("Vui lòng nhập dô!"),
      state: Yup.string()
        .max(15, "ko quá 15 ký tự")
        .required("Vui lòng nhập dô!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleClickCancel = () => {
    formik.values.fname = "";
    formik.values.lname = "";
    formik.values.address = "";
    formik.values.city = "";
    formik.values.state = "";
  };

  const handleAdd = async () => {
    const isValid =
      formik.errors.fname ||
      formik.errors.lname ||
      formik.errors.address ||
      formik.errors.city ||
      formik.errors.state;
    if (isValid) {
      return;
    }
    let data = {
      firstName: formik.values.fname,
      lastName: formik.values.lname,
      address: formik.values.address,
      city: formik.values.city,
      state: { abbreviation: "", name: formik.values.state },
      userId: 1,
    };
    let res = await axios.post("http://localhost:8000/api/customers", data);
    if (res && res.data) {
      let newBlog = res.data;
      console.log("check data:", newBlog);
      // props.handleAddNew(newBlog);
      // res.data.
    }
  };
  return (
    <div className="form-new">
      <Form method="get" className="container" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="fname">First Name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            placeholder="first name"
            value={formik.values.fname}
            onChange={formik.handleChange}
          />
          {formik.errors.fname && formik.touched.fname && (
            <p>{formik.errors.fname}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="lname">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lname"
            placeholder="last name"
            value={formik.values.lname}
            onChange={formik.handleChange}
          />
          {formik.errors.lname && formik.touched.lname && (
            <p>{formik.errors.lname}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address && formik.touched.address && (
            <p>{formik.errors.address}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="city">city</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="city"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          {formik.errors.city && formik.touched.city && (
            <p>{formik.errors.city}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="state">State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            placeholder="state"
            value={formik.values.state}
            onChange={formik.handleChange}
          />
          {formik.errors.state && formik.touched.state && (
            <p>{formik.errors.state}</p>
          )}
        </Form.Group>

        <Form.Group className="bottoms">
          <Button
            variant="primary"
            type="submit"
            className="mx-3"
            onClick={(e) => handleClickCancel(e)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="bg-success"
            onClick={(e) => handleAdd(e)}
          >
            Insert
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewCustomer;
