import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";

function AppHomePage() {
  return <div className=" h-screen flex items-center justify-center">
   <img src={logo} className="App-logo" alt="logo" />
   <ul>
   <li>
   <Link to="/Car">Car-fleet</Link>
   </li>
      <li>
   <Link to="/Todos">Todos</Link>
   </li>
      <li>
   <Link to="/FormsComponent">Forms</Link>
   </li>
   <li>
    <Link to="/Countries">Countries</Link>
   </li>
     <li>
        <Link to="/EmojiGame">Emoji's Game</Link>
      </li>
   </ul>
  </div>
}
export default AppHomePage;
