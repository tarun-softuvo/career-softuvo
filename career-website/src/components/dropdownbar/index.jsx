import React from "react"
import { Link } from "react-router-dom"


const DropdownBar=(props)=>{
  console.log('props',props)
  let menu= props.menu;

  {menu.map((value,index)=>{
    console.log('====',value.title)
  })}
    return(<React.Fragment>
         <ul className="blog-dropdownMenu">
          {menu.map((value,index)=>{
            return(
              <li key={`${value.title}-${index}`}>
                <Link
              className="blog-dropdo"
              to={value.route}
              onClick={() => props.handleSideNavigationBar(value.route, value.title)}
            >
              <span>
                <i className="fa fa-chevron-right me-2"></i> {value.title}
              </span>
            </Link>
              </li>
            )
          })}
         
        </ul>
    </React.Fragment>)
}
export default DropdownBar