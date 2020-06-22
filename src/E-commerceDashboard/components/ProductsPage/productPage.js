import React from 'react'
import { inject, observer } from 'mobx-react'

import { ToastContainer } from 'react-toastify';
import CookieConsent from "react-cookie-consent";
import { getAccessToken } from '../../../Authentication/utils/StorageUtils.js'
import ProductCart from '../../../E-commerceCart/components/ProductCart'

import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure/LoadingWrapperWithFailure'
import SizeFilter from '../SizeFilter'
import Header from '../Header'
import ProductList from '../ProductList'

import { PaginationRoute } from '../../routes/PaginationRoute'
import { SizeButtonsContent, HeaderAndProductsContent, EntireUIpage, SizeButtonsAndUIProductsSeperation, SignOutButton, SignUpButtonsAndUICartSeperation, CartSymbol } from './styledComponent.js'





@observer
class ProductsPage extends React.Component {

    renderProductList = () => {

        return (<HeaderAndProductsContent>
                    <Header/>
                    <ProductList/>
                    
                </HeaderAndProductsContent>)

    }

    render() {

        const { onClick, onSelectSize, sizeFilter } = this.props

        const {
            getProductListAPIStatus,
            getProductListAPIError,
            doNetworkCalls
        } = this.props
        return (




            <EntireUIpage>
        
                <SignUpButtonsAndUICartSeperation>
                      <SignOutButton  onClick={onClick}>SignOut</SignOutButton>
                      
                      <CartSymbol>  <ProductCart/> </CartSymbol>  
              </SignUpButtonsAndUICartSeperation>
                
                
                
                
                <SizeButtonsAndUIProductsSeperation>
                 
                    <SizeButtonsContent>
                          <SizeFilter onSelectSize={onSelectSize}
                                      sizeFilter={sizeFilter}/>
                          </SizeButtonsContent>
                          
                
                          <LoadingWrapperWithFailure apiStatus={getProductListAPIStatus}
                                                    apiError={getProductListAPIError}
                                                  onRetryClick={doNetworkCalls}
                                                  renderSuccessUI={this.renderProductList}/>
             
              </SizeButtonsAndUIProductsSeperation>
             
              
                   <PaginationRoute/>
                    
              
               
                    <CookieConsent>
                          This website uses cookies to enhance the user experience.
                  </CookieConsent>
          <ToastContainer position="bottom-center" 
                          autoClose={3000} 
                         hideProgressBar={true} 
                         closeButton={false}/>
                 
            
            </EntireUIpage>

        )
    }




}
export default ProductsPage
