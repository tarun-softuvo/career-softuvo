import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUrl from "../../Constant";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
  
const JobForm = (props) => {
  let { type, data } = props;
  // console.log('data in form',props)
  const [preview, setPreview] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    position: " ",
    fileName: " ",
    department: " ",
    description: " ",
    qualification: " ",
    experience: " ",
    location: "",
    salary: " ",
    status: "",
    skills: " ",
    vacancies: "",
  });
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate();
  const editorRef = useRef(null);
  // useEffect(() => {}, [data]);
  useEffect(() => {
    if (data) {
      setForm(data);
      console.log(data.fileName);
      setPreview(data.fileName);
    }
  }, [data]);
  function handleEditorChange(e) {
    var str = e.target.getContent();
    setForm((prevData) => ({
      ...prevData,
      description: str,
    })
    );
  }
  async function handleSubmit(event) {
    event.preventDefault()
    // console.log('form',form)
    const formData = new FormData()
    formData.append("position", form.position);
    formData.append("fileName", form.fileName);
    formData.append("department", form.department);
    formData.append("qualification", form.qualification);
    formData.append("experience", form.experience);
    formData.append("location", form.location);
    formData.append("salary", form.salary);
    formData.append("skills", form.skills);
    formData.append("status", form.status);
    formData.append("description", form.description);
    formData.append("vacancies", form.vacancies);

    if(type==="Add"){
        console.log("add blog")
        let response = await axios({
          url: apiUrl+"create-job",
          method:'POST',
          headers:{
            Authorization:`Bearer ${authCtx.token}`,
            'Content-Type':'multipart/form-data'
          } ,
          data:formData
        })
        if(response.status===201){
          navigate('/admin/job')
        }
    }else{
        console.log('Edit blog')
    }

  }
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="row mt-3">
        <div className="col-sm-10 mx-auto">
          <div className="addBlogOuter my-5">
            <form
              id="add_job"
              method="post"
              enc="multipart/form-data"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="card card-custom card-stretch border-0">
                <div className="card-header py-3 mb-3">
                  <div className="card-title align-items-start flex-column mb-0">
                    <h3 className="card-label font-weight-bolder">
                      {type} Job
                    </h3>
                  </div>
                </div>
                <div className="card-body text-start border-0 p-0">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="position">
                          Position <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="position"
                          id="position"
                          required
                          className="form-control blogTitle"
                          placeholder="Position"
                          value={form.position}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              position: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="department">
                          Department <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="department"
                          className="form-control"
                          placeholder="Department"
                          required
                          value={form.department}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              department: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="qualification">
                          Education Qualification{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="qualification"
                          id="qualification"
                          placeholder="Education Qualification "
                          className="form-control"
                          required
                          value={form.qualification}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              qualification: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="experience">
                          Experience<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="experience"
                          name="experience"
                          placeholder="Experience"
                          className="form-control"
                          required
                          value={form.experience}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              experience: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="location">
                          Location<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          placeholder="Location"
                          className="form-control"
                          required
                          value={form.location}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              location: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="salary">
                          Salary<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          placeholder="Salary"
                          className="form-control"
                          required
                          value={form.salary}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              salary: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="vacancies">
                          Vacancy<span className="text-danger">*</span>
                        </label>
                        <input
                          type="textarea"
                          name="vacancy"
                          id="vacancy"
                          placeholder="Vaccancies"
                          className="form-control"
                          required
                          value={form.vacancies}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              vacancies: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="skill">
                          Skill Required<span className="text-danger">*</span>
                        </label>
                        <input
                          type="textarea"
                          name="skill"
                          id="skill"
                          placeholder="Skills Required"
                          className="form-control"
                          required
                          value={form.skill}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              skills: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label>
                          Status <span className="text-danger">*</span>
                        </label>
                        <select
                          className="select form-control select2"
                          name="status"
                          aria-hidden="true"
                          required
                          value={form.status}
                          onChange={(event) => {
                            setForm((prevData) => ({
                              ...prevData,
                              status: event.target.value,
                            }));
                          }}
                        >
                          <option key="" value="">
                            Select Status
                          </option>
                          <option value={true}>Open</option>
                          <option value={false}>Close</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="description">
                          {" "}
                          Description <span className="text-danger">*</span>
                        </label>
                        <Editor
                          required
                          apiKey="fjnv8pd6m40tkdl6tva9sklqdppliphhvofstqa48b92mxtb"
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue={form.description}
                          init={{
                            selector:'textarea',
                            height:500,
                          
                            toolbar:'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' + 
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help' +'fullpage' ,
                            plugins :['image','help',],
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                          }}
                          onChange={(e) => handleEditorChange(e)}
                        />
                      </div>
                    </div>

                   

                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Banner <span className="text-danger"></span>{" "}
                        </label>

                        <br />
                        {preview.length ? (
                          <>
                            <div className="choosefile-outer">
                              <img src={preview} alt={preview} />
                              <button
                                onClick={(e) => {
                                  setPreview([]);
                                }}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <br />
                        <input
                          type="file"
                          required={type === "Add"}
                          // disabled={type !== "Add"}
                          onChange={(e) => {
                            if (e) {
                              const file = e.target.files;

                              if (file) {
                                setForm((prevData) => ({
                                  ...prevData,
                                  fileName: file[0],
                                }));
                              }
                              setPreview(URL.createObjectURL(file[0]));
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card-toolbar text-start mt-4">
                        <input
                          type="submit"
                          id=""
                          name=""
                          className="btn save-btn mr-2"
                          value="Save"
                        />
                        {/* <a href="/admin/blog" className="btn black-btn">
                          Cancel
                        </a> */}
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default JobForm;
