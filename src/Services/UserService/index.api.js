import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { networkCallWithApisauce } from '../../utils/APIUtils.js'

class UserService {

    api
    constructor() {
        this.api = create({
            baseURL: "https://jsonplaceholder.typicode.com/"

        })
    }
    getUsers() {
        return networkCallWithApisauce(
            this.api,
            'users/', {},
            apiMethods.get)
    }
}
export default UserService
