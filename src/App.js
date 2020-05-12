import React from "react";
import { BrowserRouter as Router, Switch, Route,withRouter } from "react-router-dom";
import { observer } from 'mobx-react'

// import AppHomePage from './components/HomePage/index.js'

import   HomePage from './components/HomePage/E-commerceRoutePath.js'
import {authenticationRoute} from './Authentication/routes/'
//import {CounterParent} from './Authentication/components'
import {CounterParent} from './Authentication/components'
import {newPerson} from './Authentication/components'
import {EcommerceProductsDashboard} from './E-commerceDashboard/routes'
import ProductsPage from './E-commerceDashboard/components/ProductsPage'
import { Provider } from 'mobx-react'
import stores from './Common/stores'
import "./App.css";
import ProductPageRoute from './E-commerceDashboard/routes/ProductPageRoute' 

class App extends React.Component {
    render() {
            return (
            <div>
    <Provider {...stores}>
    <Router  basename={process.env.PUBLIC_URL}>
          <Switch>
            
              <Route path="/example">
                     {/*<CounterParent/>*/}
                     {/*{product.total}*/}
                     <CounterParent/>
              </Route>  
              {authenticationRoute}
              {EcommerceProductsDashboard} 
              
              <Route path="/" component={HomePage}/>
               
            
          </Switch>
    </Router>
    </Provider>
    </div>
        )
    }
}
export default App











// import TodoApp from './components/mobxStoreTodo/todoApp'
// import { CarsList } from './components/CarsList'
// import { AddingTodos } from './components/TodosList'
// import { AddingTodosMobox } from './components/TodosUsingMobox'
// import Forms from './components/FormsComponents/forms.js'
// import Greetings from './components/FormsComponents/Greetings.js';
// import FavouriteDesserts from './components/FormsComponents/FavouriteDesserts.js'
// import VisitedCities from './components/FormsComponents/VisitedCities.js'
// import YourState from './components/FormsComponents/YourState.js'
// import DisabledButton from './components/FormsComponents/DisabledButton.js'
// import GridMemoryGame from './components/GridGame/GridMemoryGame/GridMemeoryGame.js'
// import EventApp from './components/EventStoreApp/eventsApp'
// import UsersPage from './components/UsersPage'

// import LoginPage from './components/LoginPage'


















        //   <Route path="/Grid-Memory-game"><GridMemoryGame/></Route>
        //   <Route path="/mobx-Store-Event"><EventApp/></Route>
        //   <Route path="/Car"><CarsList />  </Route>
        //   <Route path="/Todos"><AddingTodos/>  </Route>
        //   <Route path="/Todo-using-mobox"><AddingTodosMobox/></Route>
        //   <Route path="/mobx-store-todo-app"><TodoApp/></Route>
        //   <Route exact path="/FormsComponent/Greetings"><Greetings /></Route>
        //   <Route  exact path="/FormsComponent/Favourite-Desserts"> <FavouriteDesserts typeOfDesserts={["Vanilla","Butterscotch","Gulab Jamum","Yogurt Ports","Baked Banana","Chocolate"]}/> </Route>
        //   <Route exact path="/FormsComponent/Visited-Cities"> <VisitedCities cities={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/></Route>
        //   <Route  exact path="/FormsComponent/Your-State"> <YourState listOfState={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/></Route>
        //  <Route  exact path="/FormsComponent/Disabled"> <DisabledButton/></Route>
        // <Route exact path="/FormsComponent"><Forms/></Route>
        // <Route exact path="/FormsComponent"><Forms/></Route>
        // <Route exact path="/users" component={UsersPage}></Route>
        //   <Route path="/projects">
        //     <AppHomePage/>
        //     </Route>
            
        //      <Route path="/">
        //      <LoginPage/>
        //     </Route> 