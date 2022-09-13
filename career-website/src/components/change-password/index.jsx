import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../src/assets/images/softuvo_logo_green.png";
import * as Yup from "yup";
import Loader from "../loader";
import axios from "axios";
import apiUrl from "../../Constant";
import { toast, ToastContainer } from "react-toastify";
import SideNavbar from "../../views/sidenavbar";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import AdminHeader from "../adminHeader";
const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentpassword: "",
    newpassword: "",
    confirmPassword: "",
  });
  const authCtx= useContext(AuthContext);
  let token= authCtx.token
  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(false);
  const [eyeIconStatus, setEyeIconStatus] = useState(false);
  const [eyeIconStatus1, setEyeIconStatus1] = useState(false);
  const [eyeIconStatus2, setEyeIconStatus2] = useState(false);
  const [message, setMessage] = useState("");
  const validateSchema = Yup.object().shape({
    currentpassword: Yup.string()
      .min(6)
      .required("Password should be atleast 6 digit long"),
    newpassword: Yup.string()
      .min(6)
      .required("Password should be atleast 6 digit long"),
    confirmPassword: Yup.string().when("newpassword", (password, field) =>
      password
        ? field
            .required()
            .oneOf([Yup.ref("newpassword")], "New Password and Confirm Password must match")
        : field
    ),
  });

  function toggleEyeIcon(status) {
    setEyeIconStatus(status);
  }
  function toggleEyeIcon1(status) {
    setEyeIconStatus1(status);
  }
  function toggleEyeIcon2(status) {
    setEyeIconStatus2(status);
  }

  async function handleSubmit(values,{resetForm}) {
    console.log("handle Submit", values);
    try {
      let response = await axios({
        url: apiUrl + "change-password",
        method: "POST",
        data: values,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("response", response);
      if (response.data.status) {
        setShowLoader(false);
        resetForm({values:''})
        toast.success(response.data.message, {
          autoClose: 5000,
          onClose: () => {
            //   navigate("/admin/login")
          },
        });
      } else {
        setShowLoader(false);
        toast.error(response.data.message, {
          autoClose: 3000,
          onClose: () => {
            // navigate("/admin/login");
          },
        });
        //   navigate("/admin/forgot-password",{state:{message:response.data.message}})
      }
    } catch (err) {
      setShowLoader(false);
      toast.error("Server Error");
    }
  }
  return (
    <React.Fragment>
      <section className="job-main-area">
        <div className="container-fluid">
        <AdminHeader/>
        </div>
        <SideNavbar />
        <div className="content-wrap">
          {/* <h1>ChangePassword Page </h1> */}
          <p>Enter below details to update your current password</p>
          <>
            <ToastContainer />
            <section className="login-wrapper">
              <div className="login-main">
                <div className="container">
                  <div className="login_outer">
                    <Formik
                      initialValues={formData}
                      validationSchema={validateSchema}
                      onSubmit={(values,{resetForm}) => {
                        setShowLoader(true);
                        handleSubmit(values,{resetForm});
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        handleReset,
                        handleBlur,
                        isSubmitting,
                        getFieldProps,
                      }) => (
                        <form
                          autoComplete="off"
                          className="login-form was validate"
                          onSubmit={(handleSubmit)}
                        >
                          <div className="form-group">
                            <input
                              type={eyeIconStatus ? "text" : "Password"}
                              className="form-control mb-0"
                              id="password-field"
                              placeholder="Current Password"
                              name="currentpassword"
                              value={values.currentpassword}
                              minLength={6}
                              onChange={handleChange}
                            />
                            {errors.currentpassword &&
                            touched.currentpassword ? (
                              <label
                                id="uname-error"
                                className="error"
                                htmlFor="currentpassword"
                              >
                                {errors.currentpassword}
                              </label>
                            ) : null}
                            <i
                              className={`fa ${
                                eyeIconStatus ? "fa-eye-slash" : "fa-eye"
                              } toggle-password`}
                              toggle="#password-field"
                              onClick={() => toggleEyeIcon(!eyeIconStatus)}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type={eyeIconStatus1 ? "text" : "password"}
                              className="form-control mb-0"
                              id="password-field"
                              placeholder="New Password"
                              name="newpassword"
                              value={values.newpassword}
                              minLength={6}
                              onChange={handleChange}
                            />
                            {errors.newpassword && touched.newpassword ? (
                              <label
                                id="uname-error"
                                className="error"
                                htmlFor="newpassword"
                              >
                                {errors.newpassword}
                              </label>
                            ) : null}
                            <i
                              className={`fa ${
                                eyeIconStatus1 ? "fa-eye-slash" : "fa-eye"
                              } toggle-password`}
                              toggle="#password-field"
                              onClick={() => toggleEyeIcon1(!eyeIconStatus1)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type={eyeIconStatus2 ? "text" : "password"}
                              className="form-control mb-0"
                              id="confirm-password-field"
                              placeholder="Confirm Password"
                              name="confirmPassword"
                              minLength={6}
                              value={values.confirmPassword}
                              onChange={handleChange}
                            />
                            {errors.confirmPassword &&
                            touched.confirmPassword ? (
                              <label
                                id="uname-error"
                                className="error"
                                htmlFor="confirmPassword"
                              >
                                {errors.confirmPassword}
                              </label>
                            ) : null}
                            <i
                              className={`fa ${
                                eyeIconStatus2 ? "fa-eye-slash" : "fa-eye"
                              } toggle-password`}
                              toggle="#password-field"
                              onClick={() => toggleEyeIcon2(!eyeIconStatus2)}
                            />
                          </div>
                          {message}
                          {message.message ? (
                            <div className="form-group">
                              <label className="error text-capitalize">
                                {message.message}
                              </label>
                            </div>
                          ) : (
                            ""
                          )}

                          <button
                            type="submit"
                            className="login-btn"
                            disabled={showLoader}
                          >
                            {showLoader ? <Loader /> : "Update Password "}
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
      </section>
    </React.Fragment>
  );
};
export default ChangePassword;
