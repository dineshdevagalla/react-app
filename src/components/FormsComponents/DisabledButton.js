import React from 'react'
import {withRouter} from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";


class DisabledButton extends React.Component
  {
    state=
    {
      isDisableButtonChecked:false,
      showMessage:""
    }
  
    handleChange=(event)=>
       {
           if(event.target.checked)
           {
             this.setState({isDisableButtonChecked:event.target.checked,showMessage:" hii,iam disabled"})
           }
           else
           {
               
               this.setState({isDisableButtonChecked:event.target.checked,showMessage:""})
               
           }
              
       }
         handleSubmit=(event)=>{
             this.setState({showMessage:"hii,iam  Enabled"})
             
         }
         displayMessage=()=>{
        return this.state.showMessage
         }
         backPage=()=>{
         this.props.history.goBack()
         }



   render(){
     return(
       <div>
            <div style={{backgroundColor:"Black",height:"30px"}}>
        <p onClick={this.backPage} style={{border:"none",color:"white"}}><MdArrowBack/>Disabled</p>
      </div>  
        <input type="checkbox" onClick={this.handleChange}/>
        <button disabled={this.state.isDisableButtonChecked} onClick={this.handleSubmit}> Click Me</button>
        <div>{this.displayMessage()}</div>
        
       </div>
    );
     
   }


  }

export default withRouter ( DisabledButton)
