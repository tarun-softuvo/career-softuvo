import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import SideNavbar from "../sidenavbar";
import apiUrl from "../../Constant";
import AdminHeader from "../../components/adminHeader";

const Dashboard = () => {
  let token = localStorage.getItem('token-info')
  const [blogCount,setBlogCount]=useState(5)
  const [categoryCount,setCategoryCount]=useState(5)
  const navigate = useNavigate()
  async function getCount(){
    let response = await axios.get(apiUrl+"get-statics",{
      headers:{
        'Authorization': 'Bearer ' + token
    }})
    if(response.status===201){
      setBlogCount(response.data.blogsCount)
      setCategoryCount(response.data.categoryCount)
    }else if(response.status===200){
      navigate('/admin/login')
    }
    }
  
  useEffect(()=>{
    getCount();
  },[token])
  return (
    <React.Fragment>
      <ToastContainer/>
      <section className="job-main-area">
        <div className="container-fluid">
      <AdminHeader/>
        </div>
        <SideNavbar />
        <div className="content-wrap">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right">
                  <div className="page-header">
                    <div className="page-title">
                      <h1>Hello Admin,<span>Welcome Here</span></h1>
                    </div>
                    <div className="page-title">
                      <ol className="breadcrumb text-right">
                        <li>
                          <a href="/admin/dashboard">Dashboard</a>
                        </li>
                        <li className="active">Home</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <section className="dashboard-home">
                <div className="">
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                      <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                //  className="fas fa-blog fa-lg"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                             <a href="/admin/create-blog"> <span className="text-color">Create Blog</span></a>
                            </h3>
                          </div>
                          {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#8bd600"}}>{blogCount}</h1>  
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                    <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                // className="fa fa-users"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                             <a href="/admin/blog"> <span className="text-color">View All Blogs</span></a>
                            </h3>
                          </div>
                          {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#8bd600"}}>{categoryCount}</h1>  
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                      <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                // className="fa fa-bar-chart"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                             <a href="/admin/add-blog-category"> <span className="text-color"> Add Category</span></a>
                            </h3>
                          </div>
                          {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#8bd600"}}>{blogCount}</h1>  
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                    <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                // className="fa fa-users"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                             <a href="/admin/blog-category"> <span className="text-color">View All Category</span></a>
                            </h3>
                          </div>
                          {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#8bd600"}}>{categoryCount}</h1>  
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                      <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                // className="fa fa-bar-chart"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                             <a href="/admin/newsletter"> <span className="text-color">News Letter</span></a>
                            </h3>
                          </div>
                          {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#8bd600"}}>{blogCount}</h1>  
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                    <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                className="fa fa-users"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                             <a href="/admin/blog"> <span className="text-color">View All Blogs</span></a>
                            </h3>
                          </div>
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#8bd600"}}>{categoryCount}</h1>  
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right">
                  <div className="page-header">
                    <div className="page-title">
                      <h1>Blogs Statics</h1>
                    </div>
                   </div>
                </div>
              </div>
              <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                      <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                className="fa fa-bar-chart"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                            <a href="/admin/blogs"> <span className="text-color">Total Blogs</span></a>
                            </h3>
                          </div>
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#fff"}}>{blogCount}</h1>  
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
                    <div className="dash-box orange-dash_b">
                        <div className="row">
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6" >
                            <div className="dash-box_in">
                            <i
                                className="fa fa-users"
                                style={{ paddingLeft: "50px" }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <h3 style={{width:"200px"}}>
                             <a href=""> <span className="text-color">Total Category</span></a>
                            </h3>
                          </div>
                          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" >
                            <h1 style={{fontSize:"75px",color:"#fff"}}>{categoryCount}</h1>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Dashboard;
