import React from 'react'
import {observer} from 'mobx-react'


import {ProductInCartContent,ProductTitle,ProductStyle,ProductPriceText,ProductQuantity,CancelProductInCartButton,ProductImage,ProductDetails} from './styledComponent'

@observer
class CartItem extends React.Component{
    onRemoveCartItem=(event)=>{
        const {onRemoveCartItem}=this.props
        
        onRemoveCartItem(event.target.id)
        
    }
    getProductDetailsById=()=>{
        const {getProductDetailsById,cartItem}=this.props
        
        let product=getProductDetailsById(cartItem.productId)
    
    
    
          return (
            <ProductInCartContent>
                <CancelProductInCartButton id={cartItem.cartItemId}  onClick={this.onRemoveCartItem}>x</CancelProductInCartButton>
                <ProductImage src={product[0].imageURL} alt={product[0].title} />
                <ProductDetails className="">
                <ProductTitle >{product[0].title}</ProductTitle>
                <ProductStyle >{product[0].printStyle}</ProductStyle>
                <ProductQuantity >Quantity:{cartItem.quantity}</ProductQuantity>
                </ProductDetails><ProductPriceText>₹ {(product[0].price*cartItem.quantity).toFixed(2)}</ProductPriceText>
             </ProductInCartContent>
        );
    
    }
    
    render()
    
    {    
        
        return (
               <div>
                {this.getProductDetailsById()}
                               
               </div>
            
            
            )
        
    }
    
    
    
    
}
export default CartItem