import axios from "axios";
import React, {  useState } from "react";
import apiUrl from "../../Constant";

function CreateNewsLetter() {
  const [form, setForm] = useState({
    title: "",
    fileName: "",
  });

 async function submitHandler(e){
    e.preventDefault();
    console.log('submit handler')
    let formData = new FormData()
    formData.append('title',form.title)
    formData.append('fileName',form.fileName)

    let response = await axios({
        method:'POST',
        url: apiUrl + 'create-newsletter',
        data:formData,
        headers:{
            "Content-Type":'multipart/form-data'
        }
    }) 
    console.log('Response',response)
  }
  return (
    <React.Fragment>
      <div className="row mt-3">
        <div className="col-sm-10 mx-auto">
          <div className="addBlogOuter my-5">
            <form onSubmit={submitHandler}>
              <div className="card card-custom card-stretch border-0">
                <div className="card-header py-3 mb-3">
                  <div className="card-title align-items-start flex-column mb-0">
                    <h3 className="card-label font-weight-bolder">
                      Add NewsLetter
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body text-start border-0 p-0">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="Title">
                        Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        placeholder="NewsLetter Title"
                        className="form-control"
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
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="File">
                        File <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        name="file"
                        id="file"
                        required
                        className="form-control"
                        // value={form.file}
                        accept=".html"
                        onChange={(e) => {
                            if (e) {
                            const file = e.target.files;

                            if (file) {
                              setForm((prevData) => ({
                                ...prevData,
                                fileName: file[0],
                              }));
                            }
                          }}}
                      />
                    </div>
                    <div className="col-12">
                      <div className="card-toolbar text-start mt-4">
                        <input
                          type="submit"
                          id=""
                          name=""
                          className="btn save-btn mr-2"
                          value="Submit"
                        />
                      </div>
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
}
export default CreateNewsLetter;
