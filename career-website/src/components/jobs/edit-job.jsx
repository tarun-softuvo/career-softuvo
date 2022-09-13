import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiUrl from "../../Constant";
import SideNavbar from "../../views/sidenavbar";
import AdminHeader from "../adminHeader";
import JobForm from "./form";

const EditJob = () => {
   let params = useParams();
   let id= params.id;
//    console.log('Slug in edit blog',slug)
   let navigate = useNavigate();
    const [data,setData]=useState('')
   async function getJobDetail(id){
        let response = await axios.get(`${apiUrl}get-job-detail?id=${id}`)
        console.log('response',response.data.job[0])
        if(response.status===200){
            setData(response.data.job[0])
            }else{
              navigate('/admin/blog')
            }
        }
   
   
    useEffect(()=>{
        getJobDetail(id)
    },[id])

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
                            <a href="/admin/blog">Job</a>
                          </li>
                          <li className="breadcrumb-item active">Edit Job</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <JobForm type={"Edit"} data={data}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditJob;
