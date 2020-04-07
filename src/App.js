import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHomePage from './components/HomePage/index.js'
// import logo from "logo.svg";

import HomePage from "./components/HomePage";
import { CarsList } from './components/CarsList'
import { AddingTodos } from './components/TodosList'
import  Forms  from './components/FormsComponents/forms.js'
import CountriesDashBoard from './components/Countries/countriesDashBoard.js'
import Home from './components/home.js'
import CountryDetails from './components/Countries/countryDetails.js'
import  Greetings  from './components/FormsComponents/Greetings.js';
import  FavouriteDesserts  from './components/FormsComponents/FavouriteDesserts.js'
import  VisitedCities  from './components/FormsComponents/VisitedCities.js'
import  YourState  from './components/FormsComponents/YourState.js'
import  DisabledButton  from './components/FormsComponents/DisabledButton.js'
import  EmojiGame from './components/EmojiGame/EmojiGame/EmojiGame.js'

import "./App.css";

    let themeOption={
        light:{
            id:0,
            name:'Dark Mode',
            style:{
              backgroundColor:"#fff",
              color:"black"
            },
            buttonBorderColor:"grey",
            emojiCardColor:"#fff",
            bodyColorOfEmojiComponet:"#e6f0ff"
            
            
            
            
            
        },
        dark:{
            id:1,
            name:'Light Mode',
            style:{
              backgroundColor:"#2b3945",
              color:"white"
            },
            headerAndFotterBackgroundColor:"#2D3748",
            buttonBorderColor:"black",
            emojiCardColor:"#2c5282",
            bodyColorOfEmojiComponet:"#1a202c"
            
            
        }
        
    }
class  App extends React.Component {
    constructor(props)
    {
      super(props)
      this.state={
       selectedTheme:themeOption.light
         }
    }
changingTheme=()=>{
  this.state.selectedTheme==themeOption.light?this.setState({selectedTheme:themeOption.dark}):
  this.setState({selectedTheme:themeOption.light})
}
  render(){
    
  return (
    
    <div>
    
    <Router  basename={process.env.PUBLIC_URL} >
          <Switch>
          <Route path="/Car"><CarsList />  </Route>
          <Route path="/Todos"><AddingTodos/>  </Route>
           
          <Route exact path="/FormsComponent/Greetings"><Greetings /></Route>
          <Route  exact path="/FormsComponent/Favourite-Desserts"> <FavouriteDesserts typeOfDesserts={["Vanilla","Butterscotch","Gulab Jamum","Yogurt Ports","Baked Banana","Chocolate"]}/> </Route>
          <Route exact path="/FormsComponent/Visited-Cities"> <VisitedCities cities={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/></Route>
          <Route  exact path="/FormsComponent/Your-State"> <YourState listOfState={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/></Route>
         <Route   exact path="/FormsComponent/Disabled"> <DisabledButton/></Route>
        <Route exact path="/FormsComponent"><Forms/></Route>
          <Route exact path="/Countries" ><CountriesDashBoard themeChange={this.changingTheme} selectedTheme={this.state.selectedTheme}/></Route>
          <Route exact path="/Countries/:countryname"><CountryDetails themeChange={this.changingTheme} selectedTheme={this.state.selectedTheme}/></Route>
           <Route exact path="/FormsComponent"><Forms/></Route>
           <Route exact path="/EmojiGame"><EmojiGame themeChange={this.changingTheme} selectedTheme={this.state.selectedTheme}/></Route>
           
            <AppHomePage/>
          </Switch>
    </Router>
    </div>
  );
}
}
export default App