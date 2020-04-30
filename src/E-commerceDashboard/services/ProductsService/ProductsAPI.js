import { create } from "apisauce";

import { apiMethods } from "../../../Common/constants/APIConstants";
import {EnvironmentConstants} from "../../../Common/constants/EnvironmentConstants";
import {networkCallWithApisauce} from  '../../../Common/utils/APIUtils.js'

import endpoints from "../endpoints";

const Product_URL=`${EnvironmentConstants.BASE_URL}`
class ProductService {
    api
    constructor() {
        this.api = create({
            baseURL: Product_URL
        })
    }
    getProductsAPI( ) {
        return networkCallWithApisauce(
            this.api,
            endpoints.ProductListEndpoint, {},
            apiMethods.get)
    }
}
export default ProductService
