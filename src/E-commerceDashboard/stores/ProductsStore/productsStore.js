import { observable, action, computed } from 'mobx'
import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'

import PaginationStore from "../PaginationStore";

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import Product from '../model'


class ProductsStore {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    productAPIService
    @observable sizeFilter
    @observable sortBy
    paginationStore

    constructor(productAPIService) {
        this.init()
        this.productAPIService = productAPIService
        this.paginationStore=new PaginationStore(productAPIService,Product);
        
    }

    init = () => {
        this.productList = []
        this.getProductListAPIStatus = API_INITIAL
        this.getProductListAPIError = null
        this.sizeFilter = []
        this.sortBy = "SELECT"
        

    }

   


    @action.bound
    onChangeSortBY(typeOfSort) {
        this.sortBy = typeOfSort
    }

   
    @computed get product() {
        let filteredProducts = []


        if (this.sizeFilter.length !== 0) {

            this.sizeFilter.map((eachSize) => {

                const filteredProductsBySizeFilter = this.productList.filter((eachProduct) => {
                    return eachProduct.avaliableSizes.indexOf(eachSize) !== -1;
                });


                filteredProducts = [...filteredProductsBySizeFilter, ...filteredProducts]
                filteredProducts = [...new Set(filteredProducts)]
                //filteredProducts=filteredProducts.filter((index,value)=> filteredProducts.indexOf(value)!==index)

            });



        }
        else {

            filteredProducts = this.productList;
        }

        if (this.sortBy === 'ASCENDING') {
            filteredProducts = filteredProducts.sort((product1, product2) => product1.price - product2.price);


        }
        else if (this.sortBy === 'DECENDING') {

            filteredProducts = filteredProducts.sort((product1, product2) => product1.price - product2.price);
            filteredProducts.reverse()
        }


        //filteredProducts=[...new Set(filteredProducts)]

        return filteredProducts


    }

    @computed get sortAndFilterdProducts() {


        return this.product
    }

    @computed get totalNumberOfProductsDisplayed() {

        return this.product.length
    }











}


export default ProductsStore
