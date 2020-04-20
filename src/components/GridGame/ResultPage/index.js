import React from 'react'


import { PlayAgainButton, GameResultContent, CompletedContent } from "./styledComponent.js"




class GameResult extends React.Component {

    render() {
        const { playAgain, timerId, gameLevel } = this.props
        clearTimeout(timerId)

        return (
            <GameResultContent>
             <p>{gameLevel}</p>
               <CompletedContent> Hey  Congrulations ! You Completed All the Levels</CompletedContent>
               <PlayAgainButton onClick={playAgain}>play Again</PlayAgainButton>
            </GameResultContent>
        )
    }

}
export { GameResult as default }
