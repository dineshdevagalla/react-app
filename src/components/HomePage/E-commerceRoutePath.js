import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";
import { observer } from 'mobx-react'
import { clearUserSession } from '../../utils/StorageUtils.js'
class HomePage extends React.Component {

 render() {

  return (
   <div className="flex items-center justify-center ">
             <img src={logo} className="App-logo" alt="logo" />
              <ul>
                <li>
                <Link to="/Car"> CarsList</Link>
                </li>
              <li>
               <Link to='/ecommerce-store/products/'>E-commerce APP</Link>
              </li>
              <li>
               <Link to="/example">Example</Link>
               <Link to="/practice-advanced-concepts"> Advaced Concepts</Link>
              </li>
               <li>
                  <Link to="/Grid-Memory-game">->Grid Game </Link>
                </li>
              </ul> 
              
             
             
             </div>

  )
 }




}


export default HomePage
