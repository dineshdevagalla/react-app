import React from 'react'
import {observer,inject} from 'mobx-react'


import Product from '../Product'



import {ListOfProductsWrap} from './styledComponent.js'

@inject("productsStore","cartStore")
@observer
class  ProductList extends React.Component{
    
    
    
    render(){
        const {sortAndFilterdProducts} =this.props.productsStore
        const {onClickAddToCart}=this.props.cartStore
        const listOfProducts=sortAndFilterdProducts.map(eachProduct=>{return <Product key={Math.random().toString()} onClickAddToCart={onClickAddToCart}  product={eachProduct}/>})
        
        return(
           <ListOfProductsWrap className="flex flex-wrap justify-around"> {listOfProducts}</ListOfProductsWrap>
            
            )
    }
    
}

export default ProductList