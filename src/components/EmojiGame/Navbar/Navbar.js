import React from 'react'
import {HeaderContent,ScoreStatus,GameName,Score,TopScore,ThemeButton} from './NavbarStyledComponent.js'

class Navbar extends React.Component{
    
    
    render(){
        const {themeChange,selectedTheme}=this.props

        
        return(<HeaderContent themeColor={selectedTheme}>
        <GameName>Emoji Game</GameName>
        <ScoreStatus>
        <Score>score:12{}</Score>
        <TopScore>TopScore:12{}</TopScore>
        <ThemeButton buttonColor={selectedTheme} onClick={themeChange}>{selectedTheme.name}</ThemeButton>
        </ScoreStatus>
        </HeaderContent>)
        
    }
    
    
    
    
}
export default Navbar