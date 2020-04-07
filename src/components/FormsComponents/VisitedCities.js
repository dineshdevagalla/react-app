import React from 'react'
import {withRouter} from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
let selectedCity=[]
 class VisitedCities extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          visitedCities:"",
         selectedCities:[],
          cityOptions:this.props.cities
        }

    }

    handleCheckboxClick = (event) =>
    {     
        //   selectedCity=this.state.selectedCities.slice(0)
        if(event.target.checked)
        
        {
            
          selectedCity.push(event.target.value)
        
        }
        else{
            
             const index = selectedCity.indexOf(event.target.value);
             if (index > -1)
             {
                selectedCity.splice(index, 1);
              }
        }
        this.state.selectedCities=selectedCity
    }

    renderCityOptions = ()=>
    {
        let listOfCities = this.state.cityOptions.map(eachcity=>
        {
              return <div> <input type = "checkbox" name={eachcity}
               value={eachcity}
               onClick = { this.handleCheckboxClick }/>
               {eachcity}</div>
        })
        return <div>{listOfCities}</div>
    }
    handleSubmit=(event)=>
    {
        console.log(this.state.selectedCities)
        this.setState({visitedCities:this.state.selectedCities})
       event.preventDefault()
    }
    displayVisitedCitiesMessage=()=>
    {    
          return this.state.visitedCities!=""?` I have visited these cities ${this.state.visitedCities}`:null
    } 
          backPage=()=>{
              this.props.history.goBack()
           }

        render() {
        return (
            <div>
            <div style={{backgroundColor:"Black",height:"30px"}}>
        <p onClick={this.backPage} style={{border:"none",color:"white"}}><MdArrowBack/>Visited Cities</p>
      </div>  
       <form onSubmit={this.handleSubmit}>
               <div>what is  your FavouriteDessert</div>
                   { this.renderCityOptions()}
               <div>
                   <input type="submit" value="Make Your Choice" />
               </div>
                   <div>{this.displayVisitedCitiesMessage()}</div>
      </form>
      </div>
        );
    }

}
export default withRouter (VisitedCities)
                                    