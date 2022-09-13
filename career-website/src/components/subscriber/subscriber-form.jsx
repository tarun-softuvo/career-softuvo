import React, { useEffect, useState } from "react";

function Subscriberform(props) {
  // let type='Subscriber'
  console.log("props", props.type);
  const [form, setForm] = useState({
    email: "",
  });
  function submitHandler(event) {
    event.preventDefault();
    console.log("values", form.email);
    if(props.type==='Subscribe'){
      console.log('Subscribe api call')
  }else{
    console.log('Unsubscribe Api call')
  }
}
useEffect(()=>{
  setForm({email:''})
},[props.type])
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
                      {props.type} Email
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body text-start border-0 p-0">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="email">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="form-control"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => {
                          setForm(() => ({
                            email: e.target.value,
                          }));
                        }}
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
export default Subscriberform;
