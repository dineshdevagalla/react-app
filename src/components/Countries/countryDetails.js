import React from 'react'
import {withRouter} from 'react-router-dom'
import {Header} from './Header.js'
 let  totalCountries=[]
 class CountryDetails extends React.Component
 
     {
        state={
        countryDetails:""
      
      
     }
       
        componentDidMount()
    {
        this.GetCountries()
    }
     async GetCountries()
 
      {
            let listOfCountries=await fetch("https://restcountries.eu/rest/v2/all")
            totalCountries=await listOfCountries.json()
            let filteredCountries=totalCountries.filter((country)=>{
                 return country.name===this.props.match.params.countryname})
           
           this.setState({
            countryDetails:filteredCountries
           })
      }
     renderingCountryBorder =(event)=>
        {    
                 this.GetCountries()
                 this.props.history.push(`/Countries/${event.target.innerHTML}`);
         }
     
DispalyCountries=()=>{
    
     if(this.state.countryDetails!=''){
       let renderCountries=this.state.countryDetails.map(country=>{
          return (<div style={this.props.selectedTheme.style} >
          <div className="new-country-card">
               <img  className="new-country-card-image"src={country.flag}/>
               <div className="new-county-details-part-1">
               <h2>{country.name}</h2>
               <span><b>Native Name:</b>{country.nativeName}</span>
               <span><b>Population:</b>{country.population}</span>
               <span><b>Region:</b>{country.region}</span>
               <span><b>Sub Region:</b>{country.subregion}</span>
               <span><b>capital:</b>{country.capital}</span> 
                   <div>
                  <b>Borders:</b>
                      {country.borders.map((border)=>{
                    
                           return totalCountries.map(eachcountry=>{
                               if(eachcountry.alpha3Code===border)
                              {
                                return <button style={this.props.selectedTheme.style} className="border-countries" onClick={this.renderingCountryBorder}>{eachcountry.name}</button>
                               } })
                   
                  })}
                   </div>
               </div>
               <div className="new-county-details-part-2">
               <p><b>Top level domian:</b>{country.topLevelDomain.map(each=>{
                return each
               })}</p>
               <p><b>currency:</b>{country.currencies.map(each=>{
                return each.name
               })}</p>
               <p><b>languages:</b>{country.languages.map((each)=>each.name).join(",")}
              </p>
               </div>
               
                </div>
               

         
          </div>
          )
      })
      return renderCountries  
     }
 
}     
    render(){
    return(
             <div style={this.props.selectedTheme.style}>
                <Header onChangeTheme={this.props.themeChange}
                          selectedTheme={this.props.selectedTheme}/>
             <button  className="back-button" style={this.props.selectedTheme.style} onClick={()=>this.props.history.push("/Countries")}>Go Back</button>
              <div>{this.DispalyCountries()}</div>
                 
             </div>
     
    )
    }      
 }
 
 
 export default withRouter (CountryDetails)
export {Header}