/*global expect*/
import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";
import ProductsStore from ".";
import ProductService from "../../services/ProductsService/ProductsAPI.js";
import getProductsResponse from "../../fixtures/getProductsResponse.json";



describe("ProductsStore test", () => {

    let productsStore
    let productService


    beforeEach(() => {
        productService = new ProductService()
        productsStore = new ProductsStore(productService)

    })
    afterEach(() => {
        jest.resetAllMocks();
    })



    it("should test initialising ProductsStore", () => {
        expect(productsStore.productList).toStrictEqual([])
        expect(productsStore.getProductListAPIStatus).toBe(API_INITIAL)
        expect(productsStore.sizeFilter).toStrictEqual([])
        expect(productsStore.sortBy).toBe("SELECT")
        expect(productsStore.getProductListAPIError).toBe(null)

    })
    it('should test fetching product store', () => {
        const mockLoadingPromise = new Promise((resolve, reject) => {});
        const mockproductAPI = jest.fn();
        mockproductAPI.mockReturnValue(mockLoadingPromise);
        productService.getProductsAPI = mockproductAPI;
        productsStore.getProductList();
        expect(productsStore.getProductListAPIStatus).toBe(API_FETCHING);

    });


    it('should test  product store failure status', async() => {
        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"))
        })
        const mockproductAPI = jest.fn();
        mockproductAPI.mockReturnValue(mockFailurePromise);
        productService.getProductsAPI = mockproductAPI;

        await productsStore.getProductList();
        expect(productsStore.getProductListAPIStatus).toBe(API_FAILED);
        expect(productsStore.getProductListAPIError).toBe('error');


    });

    it('should test  product store success  status', async() => {
        const mockLoadingPromise = new Promise((resolve, reject) => {

            resolve(getProductsResponse)

        });

        const mockproductAPI = jest.fn();
        mockproductAPI.mockReturnValue(mockLoadingPromise);
        productService.getProductsAPI = mockproductAPI;
        await productsStore.getProductList();
        expect(productsStore.getProductListAPIStatus).toBe(API_SUCCESS);

    });

    it("should test  whether productList has  listOfProducts ", () => {
        productsStore.setProductListResponse(getProductsResponse)
        expect(productsStore.productList.length).toBe(getProductsResponse.length)
    })
    it("should test onChangeSortBy", () => {
        productsStore.onChangeSortBY("ASCENDING")
        expect(productsStore.sortBy).toBe("ASCENDING")


    })





    it('should test sizeFilter', () => {
        const selectedSize = 'S';
        productsStore.onSelectSize(selectedSize);
        expect(productsStore.sizeFilter).toStrictEqual(Array('S'));
        productsStore.onSelectSize('M');
        expect(productsStore.sizeFilter).toStrictEqual(Array('S', 'M'));
        productsStore.onSelectSize(selectedSize);
        expect(productsStore.sizeFilter).toStrictEqual(Array('M'));
    });
 
















})
