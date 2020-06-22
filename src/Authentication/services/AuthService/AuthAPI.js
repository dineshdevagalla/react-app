import { create } from "apisauce";

import { apiMethods } from "../../../Common/constants/APIConstants";
import { EnvironmentConstants } from "../../../Common/constants/EnvironmentConstants";
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils.js'

import endpoints from "../endpoints";

const Auth_URL = `${EnvironmentConstants.BASE_URL}`
class AuthService {
    api
    constructor() {
        this.api = create({
            baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
        })
    }
    signInAPI() {
        return networkCallWithApisauce(
            this.api,
            endpoints.signIn, {},
            apiMethods.get)
    }
}
export default AuthService
