import React from 'react'
import {observable} from 'mobx'
import {observer,inject} from 'mobx-react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCart'

import CartList from '../CartList'
import SubTotal from '../SubTotal'
import CheckOutButton from '../CheckOutButton'
import{ProductsCart,Icon,ProductCartEntireContent,AddSomeProductsIntoCart,HideCheckButton,NoOfProductStoreText, CartWrapper,SubTotalAndCheckButtonWrapper} from './styledComponent'


@inject("cartStore")
@observer
class ProductCart  extends React.Component{
 @observable shouldDispalyCart=false   
    
    
showCart=()=>{
    this.shouldDispalyCart=true
    
    
}
hideCart=()=>{
    this.shouldDispalyCart=false
}
    
    
render(){
       const {cartStore}=this.props
       return   this.shouldDispalyCart?(<ProductCartEntireContent>
              <HideCheckButton   onClick={this.hideCart}>X</HideCheckButton >
               <ProductsCart>
                    <Icon>
                <svg xmlns="http://w3.org/2000/svg"  onClick={this.showCart} className="bg-gray-800" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6h6"></path>
                </svg>
                     <NoOfProductStoreText className="">{cartStore.noOfProductsInCart}</NoOfProductStoreText >
                    </Icon>
                 <CartWrapper>
                 {cartStore.cartProductList.length===0? <AddSomeProductsIntoCart>Add some products in the cart</AddSomeProductsIntoCart>:<CartList/> }
                 
                 <SubTotalAndCheckButtonWrapper>
                  <SubTotal/>
                  <CheckOutButton/>
                 </SubTotalAndCheckButtonWrapper>
                 
                 
                 </CartWrapper>
               </ProductsCart>
       
       </ProductCartEntireContent>):
    
     <div>
           <Icon>
                <svg xmlns="http://w3.org/2000/svg"  onClick={this.showCart} className="bg-gray-800" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6h6"></path>
                </svg>
                     <NoOfProductStoreText>{cartStore.noOfProductsInCart}</NoOfProductStoreText>
             </Icon>
       </div>  
}
    
    
}
export default ProductCart