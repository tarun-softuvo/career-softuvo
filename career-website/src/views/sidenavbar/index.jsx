import React from "react";
import DashboardWhiteIcon from "../../assets/images/dashboard-white.png";
import MyProfile from "../../assets/images/my-profile.png";
import BlogIcon from '../../assets/images/blogs-icon.svg'
import JobIcon from '../../assets/images/jobicon.png'
import BlogCategoryIcon from '../../assets/images/blog-category.svg'
import NewsLetterIcon from '../../assets/images/newsletter-icon.svg'
import SettingIcon from "../../assets/images/settings.png";
import SubscriptionIcon from '../../assets/images/subscription-1.png'
import Logout from "../../assets/images/logout.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownBar from "../../components/dropdownbar";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
console.log("Side Navbar");

const ADMIN_SIDE_NAVIGATION_BAR_KEYS = [
  {
    image: DashboardWhiteIcon,
    title: "Dashboard",
    route: "/admin/dashboard",
  },
  {
    image: BlogIcon,
    title: "Blog",
    route: "/admin/blog",
  },
  {
    image: BlogCategoryIcon,
    title: "Blog Category",
    route: "/admin/blog-category",
  },
  {
    image: JobIcon,
    title: "Jobs",
    route: "/admin/job",
  }
  ,
  {
    image: SubscriptionIcon,
    title: "Subscriber Panel",
    route: "/admin/subscriber",
  }
  ,
  {
    image: NewsLetterIcon,
    title: "NewsLetter",
    route: "/admin/newsletter",
  },
  ,
  {
    image: SettingIcon,
    title: "Change Password",
    route: "/admin/change-password",
  },
  {
    image: Logout,
    title: "Logout",
    route: "/admin/login",
  },
];
const SUB_MENU_BAR = {
    "Blog":{
        subMenu:[
            {
                image: MyProfile,
                title: "Create Blog",
                route: "/admin/create-blog",
              }   ,
            {
                image: MyProfile,
                title: " View All Blogs",
                route: "/admin/blog",
              }       
        ]
    },
    "Blog Category":{
        subMenu:[
            {
                image: MyProfile,
                title: "Add New Category",
                route: "/admin/add-blog-category",
              }  ,
            {
                image: MyProfile,
                title: "View All Categories",
                route: "/admin/blog-category",
              },
                    
        ]
    }
}
const SideNavbar = () => {
  const [activeRoute, setActiveRoute] = useState([]);
  const [activeSideTab, setActiveSideTab] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subListId,setSublistId]=useState("")
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();
  function logout() {
    // localStorage.removeItem("token-info");
    // navigate("/");
    authCtx.logOut();
  }
  function handleSideNavigationBar(activeTab, type) {
    if (type === "Logout") {
      logout();
    } else {
      setActiveSideTab(activeTab);
    }
  }
  useEffect(() => {
    let routes = ADMIN_SIDE_NAVIGATION_BAR_KEYS;
    setActiveRoute(routes);
  }, []);
  return (
    <React.Fragment>
      <div className="sidebar-menu slim-scroll" id="sidebarMenu">
        <ul id="scroll">
          {activeRoute.map((value, index) => {
            return (
              <li
              className={value.route === activeSideTab ? "active" : ""}
              key={`${value.title}-${index}`}
              >
             {value.route !== "/admin/blog"  && value.route !== "/admin/blog-category" ? (
                <Link
                    className="blog-dropdown"
                    to={value.route}
                    onClick={() => {
                      handleSideNavigationBar(value.route, value.title);
                    }}
                  >
                    <span>
                      <img
                        src={value.image}
                        alt={value.image}
                        className="me-2"
                      />
                      {value.title}
                    </span>
                  </Link>
                ) : (
                  <>
                  <ul>
                    <li
                        key={`${value.title}-${index}`}
                         onClick={() => {
                        setSublistId(value.title)
                        setShowSubMenu(!showSubMenu);
                      }}
                    >
                      <a className="blog-dropdown">
                        <span>
                          <img
                            src={value.image}
                            alt={value.image}
                            className="me-2"
                          />
                        {value.title}
                        </span>
                        <p className="ms-auto">
                          <i className="fa fa-angle-down"></i>
                        </p>
                      </a>
                      </li>
                      </ul>
                    {subListId === value.title && showSubMenu ? (
                        <DropdownBar menu={SUB_MENU_BAR[value.title].subMenu} handleSideNavigationBar={handleSideNavigationBar} />
                        ) : (
                            ""
                            )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
export default SideNavbar;
