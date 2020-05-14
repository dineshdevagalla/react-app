import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, Redirect } from 'react-router-dom'
import ProductPage from '../../components/ProductsPage'

@inject("authStore", "productsStore", "cartStore")
@observer
class ProductPageRoute extends React.Component {
    componentDidMount() {

        this.doNetworkCalls()


    }
    doNetworkCalls = () => {

        const { productsStore } = this.props
        productsStore.getProductList()


    }
    userSignOut = () => {
        this.props.authStore.userSignOut()
        this.props.history.replace('/ecommerce-store/sign-in')
    }



    render() {

        const { productsStore } = this.props
        const { getProductListAPIStatus, getProductListAPIError } = this.props.productsStore

        return (
            <ProductPage onClick={this.userSignOut}
          onSelectSize={productsStore.onSelectSize} 
          sizeFilter={productsStore.sizeFilter}
          onRetryClick={this.doNetworkCalls}
          getProductListAPIStatus={getProductListAPIStatus}
          getProductListAPIError={getProductListAPIError}
          
         />
        )

    }

}


export default withRouter(ProductPageRoute)
