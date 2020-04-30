import React from 'react';
import { observer, inject } from 'mobx-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FiCheckCircle } from "react-icons/fi";



import {CartItemContent,ProductImage,
AddToCartButton,ProductTitle,
ProductBorder,
ProductInstallement ,
ProductPriceAndText,
ProductPrice,
ProductText,
FreeShippingAvaliable
} from './styledComponent.js'



@observer
class Product extends React.Component {
  
    toastImage=()=>{
        return <div className="flex items-center justify-center">
                  <FiCheckCircle className="text-green-500 text-2xl"/>
                  <span>Item Added To Cart`</span>
        </div>
        
    }
    
             

    onClickAddToCart=(event)=>{
         toast.warn(this.toastImage()) 
        this.props.onClickAddToCart(event.target.id)
        
        
    }
    
    render() {
        const { product } = this.props;
        let installementAmount=Math.round((product.price/product.installmentsCount),2)
        
        return (
            <CartItemContent>
                {product.isFreeShipping?<FreeShippingAvaliable>Free shipping</FreeShippingAvaliable>:undefined}
                <ProductImage src={product.imageURL} alt={product.title} />
                <ProductTitle >{product.title}</ProductTitle>
                <ProductBorder></ProductBorder>
                <ProductPriceAndText>
                    <ProductText>₹</ProductText>
                    <ProductPrice>{product.price}</ProductPrice>
                    
                </ProductPriceAndText>
                <ProductInstallement>or {product.installmentsCount} x ₹ {installementAmount}</ProductInstallement >
                <AddToCartButton id={product.productId} onClick={this.onClickAddToCart}>Add to cart</AddToCartButton>
                 
            </CartItemContent>
        );
    }
}
export default Product;
