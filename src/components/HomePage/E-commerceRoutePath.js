import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";
import { clearUserSession } from '../../utils/StorageUtils.js'

class EcommercePath extends React.Component{

     render(){
         
         return(
             <div className="flex items-center justify-center">
             <img src={logo} className="App-logo" alt="logo" />
              <ul>
              <li>
               <Link to="/sign-in">E-commerce APP</Link>
              </li>
              </ul> 
              
             
             
             </div>
             
             )
     }
     
     
    
    
}


export  default EcommercePath