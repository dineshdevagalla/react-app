import {observable} from 'mobx'
import {observer} from 'mobx-react'
class CartItem {
    @observable quantity
constructor(cartObject){
    
    this.cartItemId=cartObject.cartId
    this.productId=cartObject.productId
    this.quantity=1
    
}

incrementQuantity=()=>{
    
   return  this.quantity+=1
    
}

    
    
    
}
export default CartItem

