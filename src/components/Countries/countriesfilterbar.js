import React from "react"
import {SelectedRegion} from './selectregion.js'
import {SearchCountry} from './searchcountry.js'
import {FilterBarDiv} from './countriesStylesComponent.js'
 class CountriesFilterBar extends React.Component
 
 {

render(){
    
    return(
        <FilterBarDiv theme={this.props.selectedTheme}>
        <SearchCountry OnChangeSearchText={this.props.onChangeSearchText} selectedTheme={this.props.selectedTheme}/>
        <SelectedRegion 
                    onchangeselectedregion={this.props.onchangeselectedregion}
                     filterCountriesByRegion={this.props.filterCountriesByRegion}
                     selectedTheme={this.props.selectedTheme}
                    selectedRegion={this.props.selectedRegion}/>
        </FilterBarDiv>)
}
 }
export {CountriesFilterBar,SelectedRegion,SearchCountry}