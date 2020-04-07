import  React from 'react'
import './StyledComponent.js'
import Navbar from '../Navbar/Navbar.js'
import EmojiCard from '../EmojiCard/EmojiCard.js'
import {AllEmojiCards} from './StyledComponent.js'
class EmojiGame extends React.Component{
    state={
        
        emojis:[],
        score :0,
        topScore:0,
        gameState:"Playing"
    }
    
  componentDidMount()
  
  {
      let listOfEmojis=[]
       let EmojisNames=['Exploding Head','Griming face','smiling Face with Heart-Eyes',
                        'Smirking Face','Thinking Face','Winking face',
                        'Griming Face','Crying Face','Astonished Face',
                        'Fcae wuth tears of Joy','start-Struck',
                         'Winking Face with Tongue']
      for (let index=1;index<=12;index++)
      {
           listOfEmojis.push({id:index,EmojiUrl:`https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${index}.png`,isCliked:"false",name:EmojisNames[index-1]})    
          
      }
       
       
       this.setState({emojis:listOfEmojis})
       
       
           
      
      
  }
  
  onEmojiClick=(currentTarget)=>{
   let {lisOfEmojs}=this.state
        
   
   
   
  }
  shuffleEmojis=()=>{}
  incrementScore=()=>{}
  onPlayAgainClick=()=>{}
  resetGame=()=>{}
  setTopScore=()=>{}
  OnChangeTheme=()=>{}
  
 
 
 render(){
        const {emojis}=this.state
        
     const {themeChange,selectedTheme}=this.props
     
           if(emojis!="")
           {
               return(
              <div>
              <Navbar themeChange={themeChange} selectedTheme={selectedTheme}/>
              <AllEmojiCards backgroundColor={selectedTheme}>
              <EmojiCard listOfEmojis={emojis} selectedTheme={selectedTheme}  onImageCLick={this.onEmojiClick}/>
              </AllEmojiCards>
              </div>)
          }
          
          else{
              
              return (<p>Loading</p>)
              
          }
}

}
 
 
 
 
 export  default EmojiGame
 
 