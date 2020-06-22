import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Pagination } from '../../components/Pagination'

@inject("productsStore")
@observer
class PaginationRoute extends React.Component {
    @observable currentPageNumber = 0;

    productsPerPage = 3
    totalNumberOfProducts = 16
    totalPages = Math.ceil(this.totalNumberOfProducts / this.productsPerPage)

    componentDidMount() {

        this.doNetworkCalls()
    }
    @action.bound
    doNetworkCalls() {

        const { getProductList } = this.props.productsStore.paginationStore;
        getProductList()
        //this.props.shoeStore.paginationStore.aoiCall()


    }
    
    // @action.bound
    // onClickNextPage() {
    //     //if(this.currentPageNumber<this.)
    //     this.currentPageNumber < this.totalPages ? this.currentPageNumber += 1 : this.currentPageNumber
    //     this.doNetworkCalls()
    // }

    // @action.bound
    // onClickPreviuosPage() {
    //     this.currentPageNumber > 1 ? this.currentPageNumber -= 1 : this.currentPageNumber
    //     this.doNetworkCalls()
    // }

    @action.bound
    updateCurrentPage(currentPage){
        const currentPageNumber=currentPage.selected;
        const {onCurrentPageChanges}=this.props.productsStore.paginationStore;
        onCurrentPageChanges(currentPageNumber);
        //this.doNetworkCalls();
        
    }




    render() {
        const {offSet}=this.props.productsStore.paginationStore;
        
        return (<Pagination  pageCount={this.totalPages} currentPage={offSet}  updateCurrentPage={this.updateCurrentPage}/>)
    }











}

export { PaginationRoute }
