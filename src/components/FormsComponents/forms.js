import React from "react";
import {withRouter} from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";
class Forms extends React.Component{
  backPage=()=>{
  this.props.history.push("/")
  
}
  render(){
    console.log(this.props)
  return (
    <div>
    <div style={{backgroundColor:"Black",height:"30px"}}>
        <p onClick={this.backPage} style={{border:"none",color:"white"}}><MdArrowBack/>Forms Components</p>
      </div>  
    
      <div>
        <nav>
          <ul>
              <li>
              <Link to="/FormsComponent/Greetings">Greetings</Link>
                </li>
                  <li>
              <Link to="/FormsComponent/Favourite-Desserts">Favourite Desserts</Link>
                </li>
                <li>
                <Link to="/FormsComponent/Visited-Cities">Visited Cities</Link>
                </li>
                
                <li>
                <Link to="/FormsComponent/Your-State">Your State </Link>
                </li>
               <li>
                <Link to="/FormsComponent/disabled">Disabled Button</Link>
                </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
}
// export default Forms
export default withRouter (Forms)
