  import { Formik } from "formik";
  import React,{useContext, useState} from "react";
  import { Link, useNavigate } from "react-router-dom";
  import apiUrl from "../../Constant";
  import * as Yup from 'yup';
  //Loader
  import Loader from "../../components/loader";
  //Images
  import logo from "../../assets/images/softuvo_logo_green.png";
  import UserIcon from "../../assets/images/user-icon.svg"
  import { toast, ToastContainer } from "react-toastify"
import AuthContext from "../../store/auth-context";
const Login = () => {
  console.log('Login Called')
const [isLogin,setIsLogin]= useState(true)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [showLoader,setShowLoader]=useState(false)
const [formData,setFormData]=useState({
    email:email,
    password:password
})

const [eyeIconStatus, setEyeIconStatus] = useState(false);
const [isLoaded, setIsLoaded] = useState(false);
const [message, setMessage] = useState("");

function toggleEyeIcon(status) {
  setEyeIconStatus(status);
}
const switchAuthModeHandler = () => {
  setIsLogin((prevState) => !prevState);
};
const authCtx = useContext(AuthContext)
const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const navigate = useNavigate();

const handleSubmit = async(event)=>{
    try{
        //Api 
      let res= await fetch(`${apiUrl}login`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email:event.email,
            password:event.password
          })
        })
        let result = await res.json();
        if (res.status === 200) {
          if (result.success === true) {
            // localStorage.setItem("token-info", JSON.stringify(result));
            console.log('auth ctx',authCtx,result.token)
            await  authCtx.logIn(result.token)
            navigate("/admin/dashboard");
         
          } else {
            setMessage(result.message);
            setShowLoader(false)
            toast.error(result.message)
          }
        } else {
          console.log("error in login");
          setShowLoader(false)
          toast.error('Error in Login')

        }
    }catch(err){
        console.log('Error',err.message)
        setMessage("Server Error");
        setShowLoader(false)
        toast.error('Server Error')
    }
}
  return (
    <React.Fragment>
     <ToastContainer />
        <section className="login-wrapper">
        <div className="login-main">
          <div className="container">
            <div className="logo-div">
                <Link to='/' >
                  {" "}
                <img src={logo} alt="login-page"/>{" "}
                </Link>
            <p> Login to access Career Softuvo </p>
            </div>
           <div className="login_outer">
            <Formik 
            initialValues={formData}
            validationSchema={LoginSchema}
            onSubmit={(values)=>{
                setShowLoader(true)
                handleSubmit(values)
            }}
            >{({values,errors,touched,handleChange,handleSubmit,handleBlur,isSubmitting,getFieldProps})=>(
            <form autoComplete="off"
            className="login-form was validate"
            onSubmit={handleSubmit}>
               <div className="form-group">
                <input 
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
                />
                {errors.email && touched.email ? (
                        <label
                          id="uname-error"
                          className="error"
                          htmlFor="email"
                        >
                          {errors.email}
                        </label>
                      ) : null}
                       <img src={UserIcon} alt={UserIcon} />
                </div>
                <div className="form-group">
                      <input
                        type={eyeIconStatus ?'text':'password'}
                        className="form-control mb-0"
                        id="password-field"
                        placeholder="Password"
                        name="password"
                        value={values.password}
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
                    <div className="form-group form-check bottom-links checkbox-container pt-0 pb-0">
                      <label className="forgot-link">
                        {" "}
                        <Link to={{pathname:"/admin/forgot-password" ,message:''}}>
                          {" "}
                          Forgot Password?{" "}
                        </Link>{" "}
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="login-btn"
                      disabled={showLoader}
                      onClick={switchAuthModeHandler}
                    >
                      {showLoader ? <Loader /> : "Login Now"}
                    </button>
            </form>
            )}
                </Formik>
        
           </div>
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
};
export default Login;
