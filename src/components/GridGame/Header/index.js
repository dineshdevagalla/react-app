import React from 'react'
import { observer } from 'mobx-react'

import { HeaderContent, TopLevel, ThemeButton, GameLevelAndThemeButton } from './styledComponent.js'
@observer
class Header extends React.Component {

    render() {
        console.log(this.props)
        const { setCurrentTheme, selectedTheme } = this.props.themeStore
        const { gameLevel, topLevel } = this.props
        const { gridWidth } = this.props
        return (

            <HeaderContent width={gridWidth}>
            <TopLevel><b>{`TopLevel${topLevel}`}</b></TopLevel>
           <GameLevelAndThemeButton>
           <span><b>Level: {gameLevel}</b></span>
           <ThemeButton onClick={setCurrentTheme}>Mode:{selectedTheme}</ThemeButton>
           
           </GameLevelAndThemeButton>
           
           </HeaderContent>

        )

    }


}
export default Header
