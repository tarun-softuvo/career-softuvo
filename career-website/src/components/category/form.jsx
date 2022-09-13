import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import apiUrl from "../../Constant";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const CategoryForm = (props) => {
let {type,data} = props
  const [form,setForm]=useState({
    category_name:'',
    category_status:''
  })
  const [message,setMessage]=useState('')
  const navigate = useNavigate()
  useEffect(()=>{
     if(data){
      setForm(data)
    }
  },[data])

  async function handleSubmit(e) {
    e.preventDefault();
    if(type==="Add"){
    let response =  await axios({
        method:"POST",
        url:apiUrl + "add-category",
        data:{
            category:form.category_name,
            status:form.status
        },
        headers:{
            "Content-Type":"application/json"
        }
    })
    console.log('Response',response)
    if(response.status===201){
      setMessage(response.data.message)
      // e.target.reset()
      // toast.success(response.data.message,{autoClose:2000,onClose:()=>{
      // }})
      navigate('/admin/blog-category')
    }else{
      toast.error(response.data.message)
    }
      
    }else{
      let response = await axios({
        method:'POST',
        url:apiUrl+'edit-category',
        data:{
          category_name:form.category_name,
          status:form.status,
          id:data._id
        },headers:{
          "Content-Type":'application/json'
        }
      })
      console.log('response',response)
      setMessage(response.data.message)
      if(response.status === 201){
        toast.success(response.data.message)
        navigate("/admin/blog-category")
      }else{
        toast.error(response.data.message)
      }

    }
  }
  return (
    <React.Fragment>
      <ToastContainer/>
      <div className="row mt-3">
        <div className="col-sm-10 mx-auto">
          <div className="addBlogOuter my-5">
            <form
              id="add_category"
              method="POST"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="card card-custom card-stretch border-0">
                <div className="card-header py-3 mb-3">
                  <div className="card-title align-items-start flex-column mb-0">
                    <h3 className="card-label font-weight-bolder">
                      {type} Category
                    </h3>
                  </div>
                </div>
                <div className="card-body text-start border-0 p-0">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="category">
                          Category <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="category"
                          id="category"
                          required
                          className="form-control blogTitle"
                          placeholder="Category"
                          value={form.category_name}
                          onChange={(e)=>{
                            setForm((prevData)=>({
                                ...prevData,
                                category_name:e.target.value
                            }))
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="category">
                          Category Status <span className="text-danger">*</span>
                        </label>
                        <select
                          className="select form-control select2 blogcategoryclassName"
                          name="category"
                          aria-hidden="true"
                          required
                          value={form.status}
                          onChange={(event) => {
                            setForm((prevData) => ({
                              ...prevData,
                              status: event.target.value,
                            }));
                          }
                          }
                        >
                          <option value="">Select Status</option>
                          <option value="Enable">Enable</option>
                          <option value="Disable">Disable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-sm-6  ">
                      <div className="cardbody">
                        
                        <input
                        type="submit"
                        id=""
                        name=""
                        className="btn save-btn mr-2"
                        value="Save"
                      />
                       </div>
                    </div>
                  </div>
                  {/* {message}
                    {message.message ? (
                      <div className="form-group">
                        <label className="error text-capitalize">
                          {message.message}
                        </label>
                      </div>
                    ) : (
                      ""
                    )} */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CategoryForm;
