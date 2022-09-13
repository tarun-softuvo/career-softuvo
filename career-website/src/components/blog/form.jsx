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



const BlogForm = (props) => {
  let { type, data } = props;
  const [preview, setPreview] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    content: " ",
    fileName: " ",
    title: " ",
    category: " ",
    meta_title: " ",
    meta_tag: " ",
    popular: false,
    status: "",
    tags: " ",
    meta_description: " ",
    description: "",
  });
  const editorRef = useRef(null);
  const navigate = useNavigate();
    function handleEditorChange(e) {
      var str = e.target.getContent();
      setForm((prevData) => ({
        ...prevData,
        content: str,
      })  
      );
    }
  useEffect(() => {
    if (data) {
      setForm(data);
      console.log(data.fileName);
      setPreview(data.fileName);
    }
  }, [data]);
  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    let response = await axios({
      method: "GET",
      url: apiUrl + "get-category-namelist",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response", response);
    let categories = await response.data.categories;
    if (response.status === 201) {
      setCategories(categories);
    } else {
      console.log("Failed to Fetch Categories");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("clicked", type);
    // if (type === "Add") {
    const formData = new FormData();
    formData.append("content", form.content);
    formData.append("fileName", form.fileName);
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("meta_title", form.meta_title);
    formData.append("meta_tag", form.meta_tag);
    formData.append("popular", form.popular);
    formData.append("tags", form.tags);
    formData.append("status", form.status);
    formData.append("meta_description", form.meta_description);
    formData.append("description", form.description);
    if (type === "Add") {
      console.log(apiUrl + "create-blog");
      let response = await axios({
        method: "POST",
        url: apiUrl + "create-blog",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response);
      if (response.status === 201) {
        // event.target.reset();
        setMessage(response.data.message);
        toast.success(response.data.message);
        navigate("/admin/blog");
        // setForm()
      } else {
        toast.error(response.data.message);
      }
    } else {
      formData.append("id", data._id);
      console.log("In else");
      let response = await axios({
        method: "POST",
        url: apiUrl + "edit-blog",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        setMessage(response.data.message);
        toast.success(response.data.message);
        navigate("/admin/blog");
        // navigate('/admin/edit-blog/',response.data[0].slug)
        // data = response.data
      } else {
        toast.error(response.data.message);
      }
    }
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="row mt-3">
        <div className="col-sm-10 mx-auto">
          <div className="addBlogOuter my-5">
            <form
              id="add_blog"
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
                      {type} Blog
                    </h3>
                  </div>
                </div>
                <div className="card-body text-start border-0 p-0">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="title_b">
                          Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title_b"
                          required
                          className="form-control blogTitle"
                          placeholder="Title"
                          value={form.title}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              title: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="metaTitle">
                          Meta Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="meta_title"
                          className="form-control"
                          placeholder="Meta Title"
                          required
                          value={form.meta_title}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              meta_title: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="meta-tag_b">
                          Tags <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="tag"
                          id="tag"
                          placeholder="Tags "
                          className="form-control"
                          required
                          value={form.tags}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              tags: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="meta-tag_b">
                          Meta Tag <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="meta_tag_b"
                          name="meta_tag"
                          placeholder="Meta Tag "
                          className="form-control"
                          required
                          value={form.meta_tag}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              meta_tag: e.target.value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="title_b">
                          Category <span className="text-danger">*</span>
                        </label>
                        <select
                          className="select form-control select2 blogcategoryclassName"
                          name="category"
                          aria-hidden="true"
                          required
                          value={form.category}
                          onChange={(event) => {
                            setForm((prevData) => ({
                              ...prevData,
                              category: event.target.value,
                            }));
                          }}
                        >
                          <option value="">Select Category</option>
                          {categories.map((val, key) => {
                            return (
                              <option key={key} value={val.category_name}>
                                {val.category_name}
                              </option>
                            );
                          })}
                        </select>
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
                          <option value={true}>Show</option>
                          <option value={false}>Hide</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="description">
                          {" "}
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          className="form-control"
                          placeholder="Add Description"
                          minLength="150"
                          required
                          value={form.description}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              description: e.target.value,
                            }));
                          }}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="metaDescription">
                          {" "}
                          Meta Description{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="meta_description"
                          id="metaDescription"
                          className="form-control"
                          placeholder=" Meta Description"
                          maxLength="150"
                          required
                          value={form.meta_description}
                          onChange={(e) => {
                            setForm((prevData) => ({
                              ...prevData,
                              meta_description: e.target.value,
                            }));
                          }}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content <span className="text-danger">*</span>
                        </label>
                        
                       
                        <Editor
                          required
                          apiKey="fjnv8pd6m40tkdl6tva9sklqdppliphhvofstqa48b92mxtb"
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue={form.content}
                          init={{
                            selector:'textarea',
                            height:500,
                          //   file_picker_types: "image",
                          // image_title: true,
                          // insertfile link image code 'link','imagetools'
                            // toolbar:['undo redo styleselect bld italic backcolor link image alignleft  aligncenter alignright underline strikethrough formats bullist numlist outdent checklist indent help'],
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
                        <input
                          type="checkbox"
                          id="popular"
                          name="popular"
                          checked={form.popular}
                          onChange={(e) => {
                            console.log(e, form.popular);
                            setForm((prevData) => ({
                              ...prevData,
                              popular: e.target.checked,
                            }));
                          }}
                        />
                        <label htmlFor="popular"> Popular</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Image <span className="text-danger"> </span>{" "}
                        </label>

                        <br />
                        {preview.length ? (
                          <>
                          <div className="choosefile-outer">
                            <img
                              src={preview}
                              alt={preview}
                            />
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
                          className="btn save-btn mr-2 formSubmit"
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
export default BlogForm;
