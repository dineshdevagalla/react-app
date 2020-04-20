import { observable, action } from 'mobx'
import GameLevelsJsonContent from '../../components/GridGame/gameLevels.json'
import CellModel from '../models/CellModel/CellModel.js'

class GameStore {
    @observable level = 0
    @observable topLevel = 0
    @observable currentLevelGridCells = []
    @observable selectedCellCount = 0
    @observable isGameCompleted = false
    @observable clearTimeOutIds
    duplicateEntry = []




    constructor() {
        this.setGridCells()
    }
    @action.bound
    onCellClick(presentId) {


        if (!this.duplicateEntry.find(existedId => existedId === presentId)) {
            this.duplicateEntry.push(presentId)
            this.incrementSelectedCellCount()
        }
        if (this.selectedCellCount === GameLevelsJsonContent[this.level].hiddenCellCount) {
            setTimeout(() => this.goToNextLevelAndUpdateCells(), )
            this.duplicateEntry = []

        }


    }



    @action.bound
    setGridCells() {
        clearTimeout(this.clearTimeOutIds)
        let cellsObject = ""
        const numberOfCellsTobeGenerated = GameLevelsJsonContent[this.level].gridSize * GameLevelsJsonContent[this.level].gridSize
        for (let index = 0; index < numberOfCellsTobeGenerated; index++) {
            if (index < GameLevelsJsonContent[this.level].hiddenCellCount) {
                cellsObject = {
                    id: Math.random().toString(),
                    isHidden: true
                }
            }
            else {
                cellsObject = {
                    id: Math.random().toString(),
                    isHidden: false
                }
            }
            this.currentLevelGridCells.push(new CellModel(cellsObject))

        }
        let shuffledList = []
        let originalList = this.currentLevelGridCells
        while (originalList.length > 0) {
            const each = originalList[Math.floor(Math.random() * originalList.length)]
            let index = originalList.indexOf(each)
            shuffledList.push(each)
            originalList.splice(index, 1)

        }
        this.currentLevelGridCells = shuffledList
        this.clearTimeOutIds = (setTimeout(() => this.resetGame(), (1000 * GameLevelsJsonContent[this.level].gridSize * GameLevelsJsonContent[this.level].gridSize)))

    }
    @action.bound
    goToNextLevelAndUpdateCells() {
        if (this.level < GameLevelsJsonContent.length - 1) {
            this.level++
                console.log(this.level)
            this.currentLevelGridCells = []
            this.resetSelectedCellsCount()
            this.setGridCells()


        }

        else {

            this.isGameCompleted = true
            this.setTopLevel()

        }
    }
    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellCount = 0

    }
    @action.bound
    incrementSelectedCellCount() {
        this.selectedCellCount += 1
    }
    @action.bound
    onPlayAgainClick() {

        this.resetGame()
        this.isGameCompleted = false


    }



    @action.bound
    resetGame() {
        this.level = 0
        this.setTopLevel()
        this.currentLevelGridCells = []
        this.setGridCells()
        this.resetSelectedCellsCount()




    }
    @action.bound
    setTopLevel() {
        if (this.level > this.topLevel) {
            this.topLevel = this.level


        }


    }

}
const gameStore = new GameStore()
export default gameStore
