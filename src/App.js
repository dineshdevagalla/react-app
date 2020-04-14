import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer } from 'mobx-react'

import AppHomePage from './components/HomePage/index.js'
import TodoApp from './components/mobxStoreTodo/todoApp'
import { CarsList } from './components/CarsList'
import { AddingTodos } from './components/TodosList'
import { AddingTodosMobox } from './components/TodosUsingMobox'
import Forms from './components/FormsComponents/forms.js'
import Greetings from './components/FormsComponents/Greetings.js';
import FavouriteDesserts from './components/FormsComponents/FavouriteDesserts.js'
import VisitedCities from './components/FormsComponents/VisitedCities.js'
import YourState from './components/FormsComponents/YourState.js'
import DisabledButton from './components/FormsComponents/DisabledButton.js'

import EventApp from './components/EventStoreApp/eventsApp'

import "./App.css";




//   <Route exact path="/Countries" ><CountriesDashBoard themeChange={this.changingTheme} selectedTheme={this.getCurrentTheme()}/></Route>
//   <Route exact path="/Countries/:countryname"><CountryDetails themeChange={this.changingTheme} selectedTheme={this.getCurrentTheme()}/></Route>

//   <Route exact path="/EmojiGame"><EmojiGame themeChange={this.changingTheme} selectedTheme={this.getCurrentTheme()}/></Route>



// import themeStore from './stores/ThemeStore'

//configure({ enfourse: true })

@observer
class App extends React.Component {
    // getCurrentTheme = () => {
    //     return themeStore.selectedTheme
    // }
    // changingTheme = () => {
    //     themeStore.setCurrentTheme(themeStore.selectedTheme)

    // }
    render() {


        return (

            <div>
    
    <Router  basename={process.env.PUBLIC_URL} >
          <Switch>
          
          <Route path="/mobx-Store-Event"><EventApp/></Route>
          <Route path="/Car"><CarsList />  </Route>
          <Route path="/Todos"><AddingTodos/>  </Route>
          <Route path="/Todo-using-mobox"><AddingTodosMobox/></Route>
          <Route path="/mobx-store-todo-app"><TodoApp/></Route>
          <Route exact path="/FormsComponent/Greetings"><Greetings /></Route>
          <Route  exact path="/FormsComponent/Favourite-Desserts"> <FavouriteDesserts typeOfDesserts={["Vanilla","Butterscotch","Gulab Jamum","Yogurt Ports","Baked Banana","Chocolate"]}/> </Route>
          <Route exact path="/FormsComponent/Visited-Cities"> <VisitedCities cities={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/></Route>
          <Route  exact path="/FormsComponent/Your-State"> <YourState listOfState={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/></Route>
         <Route   exact path="/FormsComponent/Disabled"> <DisabledButton/></Route>
        <Route exact path="/FormsComponent"><Forms/></Route>
        <Route exact path="/FormsComponent"><Forms/></Route>

            <AppHomePage/>
          </Switch>
    </Router>
    </div>
        );
    }
}
export default App
