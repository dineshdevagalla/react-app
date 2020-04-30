import React from 'react';
import {inject,observer} from 'mobx-react'

import {CheckOutButtonContent} from './styledComponent.js'


@inject("cartStore")
@observer
class CheckOutButton extends React.Component{
    render(){
        const {clearCart,totalCartAmount}=this.props.cartStore
        console.log( typeof(parseInt(totalCartAmount)))
    return (
        <CheckOutButtonContent onClick={clearCart} disabled={parseInt(totalCartAmount)==0?true:false} >CHECKOUT</CheckOutButtonContent>
    );
    }
}

export default CheckOutButton;
