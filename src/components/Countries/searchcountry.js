import React from 'react'
import{FiSearch} from 'react-icons/fi'
import {InputField,InputFieldAndSearchIconDiv} from './countriesStylesComponent.js'
  
class SearchCountry extends React.Component{
    
 constructor(props){
     super(props)
 }
 render(){
     
     return(
         <InputFieldAndSearchIconDiv>
          <div>
          <FiSearch/>
          </div>
         <InputField theme={this.props.selectedTheme.style}    placeholder="search Your country" onChange={this.props.OnChangeSearchText} type="text"/>
         </InputFieldAndSearchIconDiv>
         )
 }
}
//className="input-field"
export {SearchCountry}