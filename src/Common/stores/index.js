import AuthAPI from "../../Authentication/services/AuthService/AuthAPI";
import AuthStore from "../../Authentication/stores/AuthStore";
import ProductsStore from '../../E-commerceDashboard/stores/ProductsStore'
import ProductsService from '../../E-commerceDashboard/services/ProductsService/ProductsAPI'
import CartStore from '../../E-commerceCart/stores/CartStore'
//import {getAccessToken} from '../../Authentication/utils/StorageUtils.js'



const authAPI = new AuthAPI()
const authStore = new AuthStore(authAPI)

const productsService = new ProductsService()
const productsStore = new ProductsStore(productsService)


const cartStore = new CartStore(productsStore)

export default { authStore, productsStore, cartStore }
