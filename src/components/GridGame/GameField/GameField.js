import React from 'react'
import Cell from '../GridCell/Cell.js'

import { GameFieldContent } from "./styledComponent.js"

class GameField extends React.Component {

    render() {
        const { gameStore, gameLevel, listOFCells, gameStoreLevel, selectedTheme } = this.props
        const gridCells = listOFCells.map(cellModel => <Cell key={cellModel.id} selectedTheme={selectedTheme} cellModel={cellModel}  gameLevel={gameLevel} gameStore={gameStore} gameStoreLevel={gameStoreLevel}/>)
        return (

            <GameFieldContent width={gameLevel.gridWidth} className={` grid grid-cols-${gameLevel.gridSize}` }>
               {gridCells} 
             </GameFieldContent>



        )

    }
}
export default GameField
