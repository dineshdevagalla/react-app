import React from 'react'
import {withRouter} from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";


class FavouriteDesserts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedDessert: "",
            favoriteDessert: ""

        }

    }

    handleUserInput = (event) => {
        this.setState({selectedDessert:event.target.value})

    }
    handleSubmit = (event) => {
        this.setState({favoriteDessert:` my Favourite Dessert is ${this.state.selectedDessert}`})
        event.preventDefault()
    }
    displayMessage = () => {
        return this.state.selectedDessert!==''?this.state.favoriteDessert:null
        
    }
    renderDessertOptions = () => {
        let listOfDesserts = this.props.typeOfDesserts.map(eachDessert=>{
           return <div> <input type = "Radio" name="desserts"
            value = {eachDessert} 
            onChange = { this.handleUserInput }/>
            {eachDessert}</div>
        })
        console.log(listOfDesserts)
        return <div>{listOfDesserts}</div>
    }
         backPage=()=>{
         this.props.history.goBack()
     }

        render() {
        return (
            <div>
            <div style={{backgroundColor:"Black",height:"30px"}}>
        <p onClick={this.backPage} style={{border:"none",color:"white"}}><MdArrowBack/>Favourite Desserts</p>
      </div>  
            <form onSubmit={this.handleSubmit}>
            <div>what is  your FavouriteDessert</div>
             { this.renderDessertOptions()}
            <div>
        <input type="submit" value="Make Your Choice" />
        </div>
        <div>{this.displayMessage()}</div>
      </form>
      </div>
        );
    }

}
export  default withRouter(FavouriteDesserts)
