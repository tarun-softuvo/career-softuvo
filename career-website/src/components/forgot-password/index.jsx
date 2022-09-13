import { Formik } from "formik";
import React,{useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiUrl from "../../Constant";
import * as Yup from 'yup';
//Loader
import Loader from "../../components/loader";
//Images
import logo from "../../assets/images/softuvo_logo_green.png";
import UserIcon from "../../assets/images/user-icon.svg"
import { toast, ToastContainer } from "react-toastify"
import axios from "axios";
const ForgotPassword=()=>{
  // let token = localStorage.getItem('token-info')
  // token=JSON.parse(token) || ''
    const [email,setEmail]=useState('')
    const [showLoader,setShowLoader]=useState(false)
    const [message, setMessage] = useState('');
    const location =useLocation();
    const warning= location.state;
    
    const [formData,setFormData]=useState({
        email:email,
    })
    
    const EmailSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
      });
      const navigate = useNavigate();
      const moveToHomePage = () => {
        navigate("/admin/reset-password");
      };
    
    const handleSubmit = async(event)=>{
        try{
            //Api 
            let response = await axios({
                url:`${apiUrl}forgot-password`,
                method:'Post',
                data:JSON.stringify({
                    email:event.email
                }),
                headers:{
                    'Content-Type':'application/json',
                    // 'Authorization': 'Bearer ' + token.token
                }
        })
            console.log('result',response)
            if(response.status===201){
                setShowLoader(false)
                toast.success(response.data.message)
            }else if(response.status===200){
                console.log('In else',)
                toast.error(response.data.message)
                setShowLoader(false)
            }
        }catch(err){
            console.log('Error',err.message)
       
        }
    }
useEffect(()=>{
  console.log('123');
  if(warning){
    console.log('location.state',location.state);
    if(location.state!=undefined){
      toast.error(warning.message)
      navigate(location.pathname, { });
     // delete location.state.message;
    } 

  //  console.log('location.state',location.state);
  }
},[])
return(
<React.Fragment>
     <ToastContainer/>
        <section className="login-wrapper">
        <div className="login-main">
          <div className="container">
            <div className="logo-div">
                <Link to='/' >
                  {" "}
                <img src={logo} alt="login-page"/>{" "}
                </Link>
            </div>
            <h3>Reset Your Password</h3>
            <p> Fear not. We’ll email you instructions to reset your password.</p>
           <div className="login_outer">
            <Formik 
            initialValues={formData}
            validationSchema={EmailSchema}
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

                    {/* {message} */}
                    {message.length ? (
                      <div className="form-group" >
                        <label className="error text-capitalize" >
                          {message}
                        </label>
                      </div>
                    ) : (
                      ""
                    )}
                  
                    <div className="form-group form-check bottom-links checkbox-container pt-0 pb-0">
                      <label className="forgot-link">
                        {" "}
                        <Link to={{pathname:"/admin/login" ,message:''}}>
                          {" "}
                         Back to login{" "}
                        </Link>{" "}
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="login-btn"
                      disabled={showLoader}
                    >
                      {showLoader ? <Loader /> : "Send Link"}
                    </button>
                   
            </form>
            )}
                </Formik>
        
           </div>
          </div>
          
        </div>
      </section>
    </React.Fragment>)
}
export default ForgotPassword