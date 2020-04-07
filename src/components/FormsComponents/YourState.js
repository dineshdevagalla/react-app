import React from 'react'
import {withRouter} from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
class YourState extends React.Component{
        state={
            selectedState:"",
            submittedState:""
        }
   
    handleChangeState=(event)=>{
        this.setState({selectedState:event.target.value
        })
        
    }
    handleSubmit=()=>
    {
        this.setState({submittedState:this.state.selectedState})
        
    }
    displayMessage=()=>
    
    {
       console.log( this.state.submittedState)
        return this.state.submittedState!=""? `iam from ${this.state.submittedState} state`:null
        
    }        
        
       backPage=()=>{
         this.props.history.goBack()
     }
        
        
           
    render(){ 
        
          const listOfStates= this.props.listOfState.map(eachState=>{
              return <option value={eachState}> {eachState}</option> })
           
         
         return(
         
              <div>
            <div style={{backgroundColor:"Black",height:"30px"}}>
        <p onClick={this.backPage} style={{border:"none",color:"white"}}><MdArrowBack/>Your state</p>
      </div> 
             <select onChange={this.handleChangeState}>
             <option>Select your state</option>
             
             {listOfStates}</select>
             
             <div><button onClick={this.handleSubmit}>Submit</button></div>
             
             <div>{this.displayMessage()}</div>
             </div>
        )
    }
        
    }
    
    
export default withRouter (YourState)
