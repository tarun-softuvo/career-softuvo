import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/softuvo_logo_green.png";
import * as Yup from "yup";
import Loader from "../../components/loader";
import queryString from 'query-string'
import axios from "axios";
import apiUrl from "../../Constant";
import ForgotPassword from "../../components/forgot-password";
import { toast, ToastContainer } from "react-toastify";
const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  let {token}= queryString.parse(location.search)
  const verifyToken=async()=>{
   let response= await axios.get(apiUrl+"verify-reset-token",{headers:{
      'Authorization': 'Bearer ' + token
    }})
    console.log('response in reset',response)
    if(!response.data.status){
      navigate('/admin/forgot-password',{state:{message:"Your password reset link has expired"}})
    }
  }
  useEffect(()=>{
    verifyToken()
  },[])
  const [showLoader, setShowLoader] = useState(false);
  const [eyeIconStatus, setEyeIconStatus] = useState(false);
  const [message, setMessage] = useState("");
  const validateSchema = Yup.object().shape({
       password: Yup.string().min(6).required("Password should be atleast 6 digit long"),
    confirmPassword: Yup.string().when("password", (password, field) =>
      password ? field.required().oneOf([Yup.ref("password")],'Password must match') : field
    ),
  });

  function toggleEyeIcon(status) {
    setEyeIconStatus(status);
  }

  async function handleSubmit(values) {
    console.log("handle Submit",values);
    try{
      let response = await axios({
        url:apiUrl + "reset-password",
        method:"POST",
        data:values,
        headers:{
          'Authorization': 'Bearer ' + token
        }})
        console.log('response',response)
        if(response.data.status){
          setShowLoader(false)
          toast.success(response.data.message,{autoClose:5000,onClose:()=>{
            navigate("/admin/login")
          }})
        }else{
          setShowLoader(false)
          toast.error(response.data.message)
          navigate("/admin/forgot-password",{state:{message:response.data.message}})
        }
    }
    catch(err){
      setShowLoader(false)
      toast.error('Server Error')
    }

  }
  return (
    <>
    <ToastContainer/>
      <section className="login-wrapper">
        <div className="login-main">
          <div className="container">
            <div className="logo-div">
              <Link to="/">
                {" "}
                <img src={logo} alt="login-page" />{" "}
              </Link>
              <p> Reset Password </p>
            </div>
            <div className="login_outer">
              <Formik
                initialValues={formData}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                  setShowLoader(true);
                  handleSubmit(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  isSubmitting,
                  getFieldProps,
                }) => (
                  <form
                    autoComplete="off"
                    className="login-form was validate"
                    onSubmit={handleSubmit}
                  >
                    
                    <div className="form-group">
                      <input
                        type={eyeIconStatus ? "text" : "password"}
                        className="form-control mb-0"
                        id="password-field"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        minLength={6}
                        onChange={handleChange}
                      />
                      {errors.password && touched.password ? (
                        <label
                          id="uname-error"
                          className="error"
                          htmlFor="email"
                        >
                          {errors.password}
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
                        type={eyeIconStatus ? "text" : "password"}
                        className="form-control mb-0"
                        id="confirm-password-field"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        minLength={6}
                        value={values.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
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
                          eyeIconStatus ? "fa-eye-slash" : "fa-eye"
                        } toggle-password`}
                        toggle="#password-field"
                        onClick={() => toggleEyeIcon(!eyeIconStatus)}
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
                      {showLoader ? <Loader /> : "Reset "}
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ResetPassword;
