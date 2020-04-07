import React from 'react';
 import {SelectedRegionDiv} from './countriesStylesComponent.js'
 class SelectedRegion extends React.Component{
     constructor(props){
         super(props);
     }
onChangeSelectedRegion=(event)=>
   {
    this.props.onchangeselectedregion(event.target.value);
    this.props.filterCountriesByRegion(event);
   }     
render(){
    
    return(
            
             <SelectedRegionDiv theme={this.props.selectedTheme.style} onChange={this.onChangeSelectedRegion}>
             <option value="All">All</option>
             <option value="Africa">Africa</option>
             <option value="Americas">Americas</option>
             <option value="Asia">Asia</option>
             <option value="Europe">Europe</option>
             <option value="Oceania">Oceania</option>
             </SelectedRegionDiv>
            )
    
    }
      
      
     
  }
  
  
  
 
 export {SelectedRegion}