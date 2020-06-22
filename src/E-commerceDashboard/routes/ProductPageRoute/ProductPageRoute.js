import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, Redirect } from 'react-router-dom'
import ProductPage from '../../components/ProductsPage'
//import{ PaginationRoute} from "../PaginationRoute";


@inject("authStore", "productsStore", "cartStore")
@observer
class ProductPageRoute extends React.Component {
    // componentDidMount() {

    //     this.doNetworkCalls()


    // }
    // doNetworkCalls = () => {

    //     const { productsStore } = this.props
    //     productsStore.getProductList()


    // }
    userSignOut = () => {
        this.props.authStore.userSignOut()
        this.props.history.replace('/ecommerce-store/sign-in')
    }
    
    onClickSelectSize=(requiredSize)=>{
        const {onSelectSize}=this.props.productsStore.paginationStore;
        onSelectSize(requiredSize)
        
    }




    render() {

        const { productsStore } = this.props
        const { getProductListAPIStatus, getProductListAPIError } = this.props.productsStore.paginationStore
        

        return (
            <div>
        <ProductPage onClick={this.userSignOut}
          onSelectSize={this.onClickSelectSize} 
          sizeFilter={productsStore.paginationStore.sizeFilter}
          onRetryClick={this.doNetworkCalls}
          getProductListAPIStatus={getProductListAPIStatus}
          getProductListAPIError={getProductListAPIError}
          />
          
          
        </div>
        )

    }

}


export default withRouter(ProductPageRoute)
