import React from 'react';
import {inject,observer} from "mobx-react"

import {SubTotalWrapper,SubToalText,TotalCartAmount} from './styledComponent'
@inject("cartStore")
@observer
class SubTotal extends React.Component {
    
    
   render(){ 
       const {totalCartAmount}=this.props.cartStore
    return (
        <SubTotalWrapper>
            <SubToalText>SUBTOTAL</SubToalText >
            <TotalCartAmount>₹ {totalCartAmount}</TotalCartAmount>
        </SubTotalWrapper>
    );
}

}

export default SubTotal;
