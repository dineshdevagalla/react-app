import React from 'react'
import { inject,observer} from 'mobx-react'
import {withRouter,Redirect} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import CookieConsent from "react-cookie-consent";
import {getAccessToken} from '../../../Authentication/utils/StorageUtils.js'
import ProductCart from '../../../E-commerceCart/components/ProductCart'

import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure/LoadingWrapperWithFailure'
import SizeFilter from '../SizeFilter'
import Header from '../Header'
import ProductList from '../ProductList'
 
import {SizeButtonsContent,HeaderAndProductsContent,EntireUIpage,SizeButtonsAndUIProductsSeperation,SignOutButton,SignUpButtonsAndUICartSeperation,CartSymbol} from './styledComponent.js'




@inject("authStore","productsStore","cartStore")
@observer
class ProductsPage extends React.Component{
componentDidMount(){
    
    this.doNetworkCalls()
     
    
}
doNetworkCalls=()=>{

    const  {productsStore}=this.props
    productsStore.getProductList()

    
}
userSignOut=()=>{
    this.props.authStore.userSignOut()
      this.props.history.push('/sign-in')
}  

renderProductList=()=>{
                console.log(this.props.productsStore.productList.length)
    return       (<HeaderAndProductsContent>
                    <Header/>
                    <ProductList/> 
                </HeaderAndProductsContent>)
    
}
    
    render(){
        
        if(getAccessToken){
        const {productsStore}=this.props
       const{getProductListAPIStatus,getProductListAPIError}=this.props.productsStore   
        return(
             
            
            
            
            <EntireUIpage>
                <SignUpButtonsAndUICartSeperation >
                <SignOutButton  onClick={this.userSignOut}>SignOut</SignOutButton>
            
            
                <CartSymbol>
                    <ProductCart/>
                </CartSymbol>  
               
               
                </SignUpButtonsAndUICartSeperation>
                <SizeButtonsAndUIProductsSeperation>
                 
                    <SizeButtonsContent>
                         <SizeFilter onSelectSize={productsStore.onSelectSize} sizeFilter={productsStore.sizeFilter}/>
                     </SizeButtonsContent>
                
                     <LoadingWrapperWithFailure apiStatus={getProductListAPIStatus}
                             apiError={getProductListAPIError}
                            onRetryClick={this.doNetworkCalls}
                            renderSuccessUI={this.renderProductList}/>
             
               </SizeButtonsAndUIProductsSeperation>
              
               
                    <CookieConsent>
                          This website uses cookies to enhance the user experience.
                  </CookieConsent>
          <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={true} closeButton={false}/>
            
            
            </EntireUIpage>
            
            )
    }
    
    else{
        
      return  <Redirect to={{pathname:"/sign-in"}}/>
        
    }
    
}
    
    
}
export default withRouter(ProductsPage)