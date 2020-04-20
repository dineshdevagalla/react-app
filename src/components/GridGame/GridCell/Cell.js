import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'


import { CellStyle1, CellStyle2 } from './styledComponent.js'

let timerId = ''
@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells = true
    @observable onWrongCellClick = false

    componentDidMount() {
        const { gameStoreLevel } = this.props
        timerId = setTimeout(() => this.shouldShowHiddenCells = false, gameStoreLevel * 1000 + 3000)
    }

    onCellClick = (event) => {
        if (this.shouldShowHiddenCells === false && this.onWrongCellClick === false) {
            const { cellModel, gameStore } = this.props
            if (cellModel.isHidden === true) {
                this.shouldShowHiddenCells = true
                gameStore.onCellClick(event.target.id)
            }
            else {
                this.onWrongCellClick = true
                setTimeout(gameStore.resetGame(), 1000)
            }

        }
    }
    componentWillunMount() {

        clearTimeout(timerId)
    }
    render() {

        const { cellModel, gameLevel, selectedTheme } = this.props
        return (
            <div>
           {this.shouldShowHiddenCells===true && cellModel.isHidden===true ? 
             <CellStyle1 cellColor={selectedTheme==="Light"?"#42a671":"#4ecbc0"}  id= {cellModel.id} width={gameLevel.cellWidth} onClick={this.onCellClick} ></CellStyle1>:
             
             
             
              <CellStyle2 id={cellModel.id} width={gameLevel.cellWidth} cellColor={selectedTheme==="Light" ? (this.onWrongCellClick ?"#e53e3e":"#4a5568")
              :(this.onWrongCellClick?"#e53e3e":"#2a4362")}  onClick={this.onCellClick} ></CellStyle2>
               
           }
           
            </div>

        )

    }


}

export default Cell
