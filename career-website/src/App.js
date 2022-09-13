import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data/profile.json";
//CSS
import "./App.css";
import "../src/assets/admin/css/custom.css";
// import "../src/assets/style/style.css";
// import "../src/assets/admin/css/bootstrap.css";
import Login from '../src/views/login'
import ViewCategories from "./components/category";
import NewsLetter from "./components/newsletter";
import EditCategory from "./components/category/edit-category";
import ForgotPassword from "./components/forgot-password";
import ResetPassword from "./views/reset-password";
import { useContext } from "react";
import AuthContext from "../src/store/auth-context";
import SideNavbar from "./views/sidenavbar";
import ChangePassword from "./components/change-password";
import Error from "./views/error";
import Dashboard from './views/dashboard'
import EditBlog from "./components/blog/edit-blog";
import Subscriber from "./components/subscriber";
import AllBlogs from "./components/blog";
import AddBlog from "./components/blog/add-blog";
import DisplayJobs from "./components/jobs";
import JobForm from "./components/jobs/form";
import AddCategory from "./components/category/add-category";
import AddJob from "./components/jobs/add-job";
import EditJob from "./components/jobs/edit-job";


// import parse from 'html-react-parser'
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/header/index";
// import Footer from "./components/footer";
import Home from "./views/home/index";
import JoinPage from "./views/whyjoinPage";
import Employeesaying from "./views/employeeSaying";
import Employeestories from "./views/employeeStories";
import EmployeeContribution from "./views/employeeContribution";
import EqualOpportunity from "./views/equalOpportunity";
import HybridWorkCulture from "./views/hybridWorkCulture";
import LifePage from "./views/lifePage";
import Team from "./views/ourteam";
import UpskillSession from "./views/upskillSession";
import UpskillSessionMore from "./views/upskillsessionMore";
import InclusionAndDiversity from "./views/inclusionAndDiversity";
import News from "./views/news";
import Contact from "./views/contactUs";
import Jobs from "./views/jobsSearch";
import JobDetails from "./views/jobDetails";
import OurCulture from "./views/ourCulture";
import BlogPage from "./views/blogPage";
import ApplicationViews from "./views/applicationViews";
import "../src/assets/css/style.css";
import Newsdetail from "./views/newsDetail";
import EmployeeDetailsItender from "./views/employeesDetails/employee-details-itender";
import EmployeeDetailsAmit from "./views/employeesDetails/employee-details-amit";
import EmployeeDetailSukhwinder from "./views/employeesDetails/employee-details-sukhwinder";
import EmployeeDetailsDiksha from "./views/employeesDetails/employee-details-diksha";
import EmployeeDetailsGaman from "./views/employeesDetails/employee-details-gaman";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-join-softuvo" element={<JoinPage />} />
          <Route path="/life-at-softuvo" element={<LifePage />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/upskill-session" element={<UpskillSession />} />
          <Route path="/our-culture" element={<OurCulture />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/inclusion-diversion"
            element={<InclusionAndDiversity />}
          />
          <Route
            path="/upskill-session-more"
            element={<UpskillSessionMore />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/news-detail" element={<Newsdetail />} />
          <Route path="/equal-opportunity" element={<EqualOpportunity />} />
          <Route path="/job-search" element={<Jobs />} />
          <Route path="/job-detail" element={<JobDetails />} />
          <Route path="/application-process" element={<ApplicationViews />} />
          <Route path="/hybrid-work-culture" element={<HybridWorkCulture />} />
          <Route path="/employee-saying" element={<Employeesaying />} />
          <Route path="/employee-stories" element={<Employeestories />} />
          <Route
            path="/employee-contributions"
            element={<EmployeeContribution />}
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/employee-details-itender"
            element={<EmployeeDetailsItender />}
          />
          <Route
            path="/employee-details-amit"
            element={<EmployeeDetailsAmit />}
          />
          <Route
            path="/employee-details-sukhwinder"
            element={<EmployeeDetailSukhwinder />}
          />
          <Route
            path="/employee-details-diksha"
            element={<EmployeeDetailsDiksha />}
          />
          <Route
            path="/employee-details-gaman"
            element={<EmployeeDetailsGaman />}
          />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/create-blog" element={<AddBlog />} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin/blog" element={<AllBlogs />} />
          <Route path="/admin/edit-blog/:slug" element={<EditBlog />} />
          <Route path="/admin/blog-category" element={<ViewCategories />} />
          <Route path="/admin/add-blog-category" element={<AddCategory />} />
          <Route path="/admin/edit-category/:slug" element={<EditCategory />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />
          <Route path="/admin/newsletter" element={<NewsLetter />} />
          <Route path="/admin/subscriber" element={<Subscriber />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />
          <Route path="/admin/job" element={<DisplayJobs />} />
          <Route path="/admin/create-job" element={<AddJob />} />
          <Route path="/admin/get-job-detail/:id" element={<EditJob />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
