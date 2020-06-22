import React from "react";
import {observable,action,computed} from "mobx";
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'



class PaginationStore {
    
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable offSet
    @observable productsList
    @observable sizeFilter
    @observable offSet;
    @observable limit;
    
    
    constructor(service,model){
        this.ecommerceService=service
        this.entityModel=model
        this.productsList=new Map();
        this.getProductListAPIError=null;
        this.getProductListAPIStatus=API_INITIAL;
        this.sizeFilter = []
        this.offSet=0;
        this.limit=3;
        
        
        
    }
    
    @action.bound
    getProductList(){
        
        const {offSet,limit}=this;
        
        if(this.productsList.has(offSet)) return;
        else {
        const productsListPromise =this.ecommerceService.getProductsAPI(offSet, limit)

        return  bindPromiseWithOnSuccess(productsListPromise).to(this.setProductListAPIStatus, this.setProductListResponse)
            .catch(this.setProductListAPIError)
        }
    }
    
    @action.bound
    setProductListResponse(productsResponse) {
        
        const {offSet:key,entityModel} = this;
        const {products,total} = productsResponse;
        
        
        const value = products.map(each => new entityModel(each));
        this.productsList.set(key,value);
        
      

    }
    
    @action.bound
    setProductListAPIError(error) {
        this.getProductListAPIError = error
    }

    @action.bound
    setProductListAPIStatus(APIStatus) {

        this.getProductListAPIStatus = APIStatus
    }


    
    @computed
    get products(){
        const {productsList,offSet} = this;
        return productsList.get(offSet);
    }
    
    
    
     @action.bound
    async onSelectSize(selectedSize) {
        
        await this.init();
        //console.log(this.getProductListAPIStatus,"productsList ----->store");
        if (!this.sizeFilter.find(existedSize => existedSize === selectedSize)) {
            this.sizeFilter.push(selectedSize)

        }
        else {
            const index = this.sizeFilter.indexOf(selectedSize);
            this.sizeFilter.splice(index, 1);
        }
        
        if (this.sizeFilter.length !== 0) {
            this.filterProducts();
        }
    }
    @action.bound
    async init(){
        this.productsList.clear();
        this.getProductListAPIStatus=API_INITIAL;
        this.getProductListAPIError=null;
        this.offSet=0;
        await this.getProductList();
        
    }
    @action.bound
    onCurrentPageChanges(currentPage){
        
        this.offSet=currentPage;
        this.getProductList();
        
    }
    
    @action.bound
    filterProducts(){
        
        
        this.sizeFilter.map((eachSize) => {
                let filteredProducts=[];
                const {products,offSet}=this;
                
                const filteredProductsBySizeFilter = products.filter((eachProduct) => {
                    return eachProduct.avaliableSizes.indexOf(eachSize) !== -1;
                });


                //filteredProducts = [...filteredProductsBySizeFilter, ...products]
                //filteredProducts = [...new Set(filteredProducts)]
                
                this.productsList.set(offSet,filteredProductsBySizeFilter);
                
                
            });
    }
    
    
    
}

export default PaginationStore;