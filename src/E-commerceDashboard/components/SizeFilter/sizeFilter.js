import React from 'react'
import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import {observer} from 'mobx-react'
import {SizeChart,SizeText,ButtonsWrap,SizeButton,SizeButtonsContent} from './styledComponent.js'



let listOfSizes=['XS','S','M','L',"XL","XXL"]
@observer
class SizeFilter extends  React.Component{

onSelectSize=(event)=>{
    
    this.props.onSelectSize(event.target.value)
}


sizeButtons=()=>{
    
    return listOfSizes.map(eachSize=>{
              const {sizeFilter}=this.props
              
             if(sizeFilter.find(existedSize=>existedSize===eachSize))
              {
               return   <SizeButton key={eachSize} color="white"  bgColorProp="black" onClick={this.onSelectSize} value={eachSize}>{eachSize}</SizeButton> 
              }
              
              else{
                       return <SizeButton key={eachSize}  color="black" bgColorProp="#edf2f7" onClick={this.onSelectSize} value={eachSize}>{eachSize}</SizeButton>
                  }
            
            
            
    })
    
}

render(){
    
    
    return(
        <SizeButtonsContent>
        <SizeText>
        
        Size:
        </SizeText> 
        <SizeChart>
        
        
        <ButtonsWrap>
          {this.sizeButtons()}
        </ButtonsWrap>
        </SizeChart>
        </SizeButtonsContent>
        
        )
}


}

export default SizeFilter