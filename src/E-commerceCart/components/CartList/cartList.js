import React from 'react'
import {observer,inject} from 'mobx-react'

import CartItem from '../CartItem'
@inject("cartStore")
@observer
class CartList extends React.Component{
    
    
 render(){
      const {cartProductList, onRemoveCartItem,getProductDetailsById}=this.props.cartStore
        const cartItems=cartProductList.map(eachCartItem=><CartItem 
        cartItem={eachCartItem}
        key={Math.random()}
        onRemoveCartItem={onRemoveCartItem} 
        getProductDetailsById={getProductDetailsById} />)
        
     return(
         
         
         <div>
          {cartItems}
         </div>
         )
     
 }   
    
    
    
}
export default CartList