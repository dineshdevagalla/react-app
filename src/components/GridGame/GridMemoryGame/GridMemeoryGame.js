import React from 'react'
import { observer } from 'mobx-react'

import gameStore from '../../../stores/GameStore/GameStore.js'
import themeStore from "../../../stores/ThemeStore"

import GameLevelsJsonContent from '../gameLevels.json'
import GameField from '../GameField/GameField.js'
import Header from '../Header'
import GameResult from '../ResultPage'

import { EntireGridGame, HeaderAndRemainingContent } from './styledComponent.js'

@observer
class GridMemoryGame extends React.Component {

    

    render() {
        return (

            <EntireGridGame  fontColor={themeStore.selectedTheme==="Light"?"black":"white"} themeColor={themeStore.selectedTheme==="Light"?"white":"#1a202c"}>
                <HeaderAndRemainingContent>
                <Header gridWidth={GameLevelsJsonContent[gameStore.level].gridWidth}  gameLevel={gameStore.level} topLevel={gameStore.topLevel} themeStore={themeStore}/>  
                  {gameStore.isGameCompleted ? <GameResult  gameLevel={gameStore.level} topLevel={gameStore.topLevel} selectedTheme={themeStore.selectedTheme}  playAgain={gameStore.onPlayAgainClick} timerId={gameStore.clearTimeOutIds}/> 
              :<GameField gameStoreLevel={gameStore.level} gameLevel={GameLevelsJsonContent[gameStore.level]}  gameStore={gameStore}  selectedTheme={themeStore.selectedTheme}listOFCells={gameStore.currentLevelGridCells}/>}
                </HeaderAndRemainingContent>
                </EntireGridGame>




        )

    }


}
export default GridMemoryGame
