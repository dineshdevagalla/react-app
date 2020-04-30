import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";
import { clearUserSession } from '../../utils/StorageUtils.js'

class AppHomePage extends React.Component {

    // clearCookie = () => {
    //       this.props.history.replace('/')
        
    //     clearUserSession()

    // }
    render() {
            
      
        return (
            <div className="flex justify-center items-center">
            <button  onClick={this.clearCookie}className="border ml-4 w-24 border-solid border-blue-600">sign out</button>
            <div className=" h-screen flex items-center justify-center">
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
      <li>
      <Link to="/counter-page">Counter page</Link>
      </li>
      <li>
      <Link to="/Todo-using-mobox">Todos using mobox</Link>
      
      </li>
      <li>
      <Link to="/mobx-store-todo-app">mobx-store-todo</Link>
      
      </li>
      <li>
      <Link to="/mobx-practicse">mobx practise</Link>
      </li>
      <li>
      <Link to="/mobx-Store-Event">mobx Store Event</Link>
      
      </li>
      
      <li>
      <Link to="/Grid-Memory-game">Grid Game </Link>
      
      </li>
      

      
         <li>
      <Link to="/users">UsersPage</Link>
      
      </li>
  </ul>
  </div>
  </div>

        )
    }
    

        
        
    

}


export default withRouter(AppHomePage)
