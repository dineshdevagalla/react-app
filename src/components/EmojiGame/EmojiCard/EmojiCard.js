import React from 'react'
import {EmojiCardContent,EmojiImage,EmojiName} from './EmojiCardStyledComponent.js' 

class EmojiCard extends React.Component {


onEmojiClick=(event)=>{
    console.log(event.currentTarget.id)
      this.props.onImageCLick(event.currentTarget.id)    
    
    
}



render(){

       let EmojisCards= this.props.listOfEmojis.map(eachEmoji=>{
             return <EmojiCardContent  key={eachEmoji.id.toString()}   id={eachEmoji.id}  onClick={this.onEmojiClick} BackgroundColor={this.props.selectedTheme}>
                         <EmojiImage  src={eachEmoji.EmojiUrl}/>
                         <EmojiName>{eachEmoji.name}</EmojiName>      
             </EmojiCardContent>})
    

    
    
    return(EmojisCards)
    
}

}













export default EmojiCard