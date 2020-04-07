import React from "react"
import {withRouter} from 'react-router-dom'
 import {Header} from './Header.js'
 import {SearchCountry} from './searchcountry.js'
 import {CountriesFilterBar} from './countriesfilterbar.js'
 import {SelectedRegion} from './selectregion.js'
 import{CountryProperties,CountryCardStyle,Theme,CountryDashBoard} from './countriesStylesComponent.js'
 // import {CountryCard} from './countrycard.js'
  import "./countries.css"
 let totalCountries=[]
class CountriesDashBoard extends React.Component{
constructor(props)
   {
    super(props)
    this.state={countries:[],selectedTheme:"light",searchText:"",selectedRegion:"All"}
    
    }
    
    componentDidMount()
    {
        this.GetCountries()
    }
     async GetCountries()
     {
          let listOfCountries=await fetch("https://restcountries.eu/rest/v2/all")
          totalCountries=await listOfCountries.json()
          this.setState({countries:totalCountries});

     }
     
    
    navigationToCountryDetails=(country)=>{
        this.props.history.push(`/Countries/${country.name}`);

    }
     
    DispalyCountries=()=>{
     if(this.state.countries!=""){
      let renderCountries=this.state.countries.map(country=>{
       
          return (
               <CountryCardStyle   onClick={() => this.navigationToCountryDetails(country)}>
                       <img className="image-properties" src={country.flag}/>
                       <h3>{country.name}</h3>
                       <span><b>Population</b> :{country.population}</span>
                       <span><b>Region</b>:{country.region}</span>
                       <span><b>capital</b> :{country.capital}</span>  
          </CountryCardStyle>
          )
      })
      return renderCountries  
     }
    }
    FilterCountriesBySelectedRegion=(event)=>{
           let filtercountries
    
         if(event.target.value=="All")
         { 
               filtercountries=totalCountries.filter((country)=>{
               return   country.name.toLowerCase().search(this.state.searchText)!=-1})
         }
         else
         {
            filtercountries=totalCountries.filter((country)=>{
            return country.region.search(event.target.value)!=-1 && country.name.toLowerCase().search(this.state.searchText)!=-1})
         }
         this.setState({countries:filtercountries})
    }
    FilterCountriesBySearchText=(value)=>{
          let filterCounteriesByname
         if(value===""||this.state.selectedRegion=="All")
         {
                filterCounteriesByname=totalCountries.filter((country)=>{
                return  country.name.toLowerCase().search(value)!=-1})
                this.setState({countries:filterCounteriesByname})
         }
         else
            {
                filterCounteriesByname=totalCountries.filter((country)=>{
                return this.state.selectedRegion=== country.region && country.name.toLowerCase().search(value)!=-1
            })
                this.setState({countries:filterCounteriesByname})
         } 
    }
    OnChangeSearchText=(event)=>{
        
         this.setState({searchText:event.target.value})
         this.FilterCountriesBySearchText(event.target.value)
         
    }
    OnChangeSelectedRegion=(selectedRegion)=>{
               this.setState({selectedRegion:selectedRegion})    
    }
    render(){
        return(
             
              <CountryDashBoard theme={this.props.selectedTheme.style}>
                         <Header onChangeTheme={this.props.themeChange}
                                  selectedTheme={this.props.selectedTheme}
                         />
                        <CountriesFilterBar
                                  filterCountriesByRegion={this.FilterCountriesBySelectedRegion}
                                   onChangeSearchText={this.OnChangeSearchText}
                                   onchangeselectedregion={this.OnChangeSelectedRegion}
                                   selectedTheme={this.props.selectedTheme}
                        />
                       <CountryProperties>
                                   {this.state.countries=="" && <p>Loading..</p>}
                                    {this.DispalyCountries()}
                        </CountryProperties>
               </CountryDashBoard>
            )
    }
}
 export default withRouter (CountriesDashBoard)
export {Header,CountriesFilterBar,SearchCountry}