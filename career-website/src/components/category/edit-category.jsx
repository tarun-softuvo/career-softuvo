import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import apiUrl from "../../Constant";
import CategoryForm from "./form";
import SideNavbar from "../../views/sidenavbar";
import AdminHeader from "../adminHeader";


const EditCategory = (props) => {
  let location = useLocation();
    const {slug}=useParams();
    let id = location.state.item._id
    let navigate = useNavigate()
    console.log('props in edit category',location.state,id)
    const [data,setData]=useState()
    useEffect(()=>{
        getCategoryData()
    },[])
    async function getCategoryData(){
        let response = await fetch(`${apiUrl}get-specific-category?slug=${slug}`)
        // let response = await fetch(`${apiUrl}get-specific-category?id=${id}`)
        let output= await response.json();
        console.log('OutPut',output.docs[0])
        if(response.status===201){
          setData(output.docs[0])
        }else{
          navigate('/admin/blog-category')
        }
    }
  return (
    <React.Fragment>
      <section className="main-job-area">
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
                  <h1 className="page-title">Edit Blog Category</h1>        
                </div>
                </div>
              </div>
              <CategoryForm type={'Edit'} data={data}/>
              </div>
            </div>
            <div >
            </div>
          </div>
      </section>
    </React.Fragment>
  );
};

export default EditCategory;
