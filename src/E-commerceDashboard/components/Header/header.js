import React from 'react'
import tw from 'tailwind.macro'
import styled from '@emotion/styled'

import {inject,observer} from 'mobx-react'
import {HeaderContent,NumberOfProducts,SelectSortBy,SelectSortByText,OnChangeSelectWrap,SelectOption} from './styledComponent.js'

@inject("productsStore")
@observer
class Header extends React.Component{
    
  onChangeSortBY=(event)=>{
       const{onChangeSortBY}=this.props.productsStore
              onChangeSortBY(event.target.value)
      
  }  
render(){
         const {totalNumberOfProductsDisplayed}=this.props.productsStore
    
    return(
        
        <HeaderContent>
        <NumberOfProducts> {totalNumberOfProductsDisplayed} product(s) Left</NumberOfProducts>
        <SelectSortBy>
        <SelectSortByText>select Sort by :</SelectSortByText>
          <OnChangeSelectWrap onChange={this.onChangeSortBY}>
          <SelectOption value="Select">Select</SelectOption>
          <SelectOption value="ASCENDING">Lowest To Heighest</SelectOption> 
          <SelectOption value="DECENDING">Height to Lowest</SelectOption> 
          
         </OnChangeSelectWrap>
        </SelectSortBy>
        </HeaderContent>
        
        )
}    
    
    
}
export default Header