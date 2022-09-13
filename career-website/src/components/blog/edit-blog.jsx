import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiUrl from "../../Constant";
import BlogForm from "./form";
import SideNavbar from "../../views/sidenavbar";
import AdminHeader from "../adminHeader";

const EditBlog = () => {
   let params = useParams();
   let slug= params.slug;
   console.log('Slug in edit blog',slug)
   let navigate = useNavigate();
    const [data,setData]=useState('')
   async function getBlogDetail(slug){
        let response = await axios.get(`${apiUrl}get-blog-detail?slug=${slug}`)
        console.log('response',response)
        if(response.status===201){
            setData(response.data[0])
            }else{
              navigate('/admin/blog')
            }
        }
   
   
    useEffect(()=>{
        getBlogDetail(slug)
    },[slug])

  return (
    <>
      <section className="job-main-area">
        <div className="container-fluid">
          <AdminHeader />
        </div>
        <SideNavbar />
        <div className="content-wrap">
          <div className="conatiner-fluid">
            <div className="main">
              <div className="row">
                <div className="col-lg-12 p-r-0 title-margin-right">
                  <div className="page-header">
                    <h1 className="page-title"> Blogs</h1>
                    <div className="flexAlign">
                      <div>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="/admin/dashboard">Dashboard</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="/admin/blog">Blog</a>
                          </li>
                          <li className="breadcrumb-item active">Edit Blog</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogForm type={"Edit"} data={data}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditBlog;
