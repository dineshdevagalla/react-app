import {observable,action,computed} from 'mobx'
import CartItem from '../model'
import {observer} from 'mobx-react'
class CartStore 
{
    @observable cartProductList
    productStore
   constructor(productStore){
       this.productStore=productStore
       this.init()
   }
   
  @action 
   init(){
      
      this.cartProductList=[]
       
   }
   @action.bound
   onClickAddToCart(newProductId){
       
       if(!this.cartProductList.find(eachModel=>eachModel.productId===newProductId))
       {
         const cartObject={
             cartId:Math.random().toString(),
             productId:newProductId,
             //productQuantity:1
      } 
      
      this.cartProductList.push(new CartItem(cartObject))
       
       }
       else{
           this.cartProductList.map(eachModel=>{
               
               if(eachModel.productId===newProductId){
                   
                   eachModel.incrementQuantity()
               }
               
               
           })
           
           
       }
      
   
   }
    @action.bound 
    onRemoveCartItem(removeProductInCart){
        
     this.cartProductList=this.cartProductList.filter(eachCart=>(eachCart.cartItemId!=(removeProductInCart))
           
        )
        
        
    }
    
    
    
    @action.bound clearCart(){
        
        this.cartProductList=[]
         alert("Thank for shopping your Products will be Delivered in 3 days on mwntioned address")
        
    }
    
    
    
    @action.bound
    getProductDetailsById(productId){
 
 const selectedProduct= this.productStore.productList.filter((eachProduct)=> {
     
     
     return eachProduct.productId===parseInt(productId)}
                  
        
        )
        console.log(selectedProduct)
        return selectedProduct
        
    }
    
    @computed get totalCartAmount(){
        
        
        let totalCartAmount = 0;
        this.cartProductList.forEach((eachProduct) => {
            totalCartAmount += (eachProduct.quantity * (this.getProductDetailsById(eachProduct.productId)[0].price));
        });

        return totalCartAmount.toFixed(2);
        
        
    }
    
    
    @computed get noOfProductsInCart(){
        
        let noOfProductsInCart=0
        this.cartProductList.map(eachProduct=>
        
          noOfProductsInCart+=eachProduct.quantity
        )
        
       return noOfProductsInCart 
    }
    
}
export default CartStore


