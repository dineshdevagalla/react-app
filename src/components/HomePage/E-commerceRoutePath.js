import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";
import { observer } from 'mobx-react'
import { clearUserSession } from '../../utils/StorageUtils.js'
class HomePage extends React.Component {

 render() {

  return (
   <div className="flex items-center justify-center">
             <img src={logo} className="App-logo" alt="logo" />
              <ul>
              <li>
               <Link to='/ecommerce-store/products/'>E-commerce APP</Link>
              </li>
              <li>
               <Link to="/example">Example</Link>
              </li>
              </ul> 
              
             
             
             </div>

  )
 }




}


export default HomePage
