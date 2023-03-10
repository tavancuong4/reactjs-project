import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Form.scss";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "nhap lon hown 5")
        .max(8, "nhap nho hon 8")
        .required("vui long nhap vao cho trong"),
      email: Yup.string()
        .email("Email ko hop le")
        .required("vui long nhap vao cho trong"),
      address: Yup.string().required("vui long nhap vao cho trong"),
      password: Yup.string()
        .min(4, "nhap lon hown 5")
        .max(8, "nhap nho hon 8")
        .required("vui long nhap vao cho trong"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Ko hop le")
        .required("vui long nhap vao cho trong"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form className="form-container" action="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <label className="label" htmlFor="">
            Name :{" "}
          </label>
          <input
            className="input"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>
        <div className="row">
          <label className="label" htmlFor="">
            Email :{" "}
          </label>
          <input
            className="input"
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div className="row">
          <label className="label" htmlFor="">
            Address :{" "}
          </label>
          <input
            className="input"
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address && formik.touched.address && (
            <p>{formik.errors.address}</p>
          )}
        </div>
        <div className="row">
          <label className="label" htmlFor="">
            Password :{" "}
          </label>
          <input
            className="input"
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div className="row">
          <label className="label" htmlFor="">
            Confirm Password:{" "}
          </label>
          <input
            className="input"
            type="text"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p>{formik.errors.confirmPassword}</p>
          )}
        </div>

        <input className="submit" type="submit" value="Submit Form" />
      </form>
    </div>
  );

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     address: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .min(5, "Vui l??ng nh???p l???n h??n 5 k?? t???")
  //       .max(8, "Vui l??ng nh???p nh??? h??n 8 k?? t???")
  //       .required("B???n ph???i ??i???n v??o ch??? tr???ng"),
  //     email: Yup.string()
  //       .email(" Email kh??ng h??? l???")
  //       .required("B???n ph???i ??i???n v??o ch??? tr???ng"),
  //     address: Yup.string().required("B???n ph???i ??i???n v??o ch??? tr???ng"),
  //     password: Yup.string()
  //       .min(5, "Vui l??ng nh???p l???n h??n 5 k?? t???")
  //       .max(8, "Vui l??ng nh???p nh??? h??n 8 k?? t???")
  //       .required("B???n ph???i ??i???n v??o ch??? tr???ng"),
  //     confirmPassword: Yup.string()
  //       .oneOf([Yup.ref("password")], "Password kh??ng h???p l???")
  //       .required("B???n ph???i ??i???n v??o ch??? tr???ng"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  // return (
  //   <div>
  //     <form action="" onSubmit={formik.handleSubmit}>
  //       <div>
  //         <label htmlFor="">Name: </label>
  //         <br />
  //         <input
  //           type="text"
  //           name="name"
  //           value={formik.values.name}
  //           onChange={formik.handleChange}
  //         />
  //         {formik.errors.name && formik.touched.name && (
  //           <p>{formik.errors.name}</p>
  //         )}
  //       </div>
  //       <div>
  //         <label htmlFor="">Email: </label>
  //         <br />
  //         <input
  //           type="text"
  //           name="email"
  //           value={formik.values.email}
  //           onChange={formik.handleChange}
  //         />
  //         {formik.errors.email && formik.touched.email && (
  //           <p>{formik.errors.email}</p>
  //         )}
  //       </div>
  //       <div>
  //         <label htmlFor="">Address: </label>
  //         <br />
  //         <input
  //           type="text"
  //           name="address"
  //           value={formik.values.address}
  //           onChange={formik.handleChange}
  //         />
  //         {formik.errors.address && formik.touched.address && (
  //           <p>{formik.errors.address}</p>
  //         )}
  //       </div>
  //       <div>
  //         {" "}
  //         <label htmlFor="">Password</label>
  //         <br />
  //         <input
  //           type="password"
  //           name="password"
  //           value={formik.values.password}
  //           onChange={formik.handleChange}
  //         />
  //         {formik.errors.password && formik.touched.password && (
  //           <p>{formik.errors.password}</p>
  //         )}
  //       </div>
  //       <div>
  //         <label htmlFor="">Confirm password</label>
  //         <br />
  //         <input
  //           type="password"
  //           name="confirmPassword"
  //           value={formik.values.confirmPassword}
  //           onChange={formik.handleChange}
  //         />
  //         {formik.errors.confirmPassword && formik.touched.confirmPassword && (
  //           <p>{formik.errors.confirmPassword}</p>
  //         )}
  //       </div>

  //       <input type="submit" value="Submit Form" />
  //     </form>
  //   </div>
  // );
};

export default FormikForm;
