import React from "react"
import { FiMoon} from "react-icons/fi";
import {WhereInTheWorld,ThemeOptionButton,HeaderDiv} from "./countriesStylesComponent.js"

class Header extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
           <HeaderDiv>
            <WhereInTheWorld>Where  in the world..?</WhereInTheWorld>
            <ThemeOptionButton theme={this.props.selectedTheme.style} onClick={this.props.onChangeTheme}><FiMoon/>{this.props.selectedTheme.name}</ThemeOptionButton>             
            </HeaderDiv>
            
            )
        
    }
    
}
export {Header,FiMoon}