import { observable, action } from 'mobx'
import { API_INITIAl, API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class UsersStore {
    @observable getUsersApiStatus
    @observable getUserApiError
    @observable users
    userService
    constructor(userService) {
        this.init()

        this.userService = userService
    }
    @action.bound
    init() {


        this.getUsersApiStatus = API_INITIAl
        this.getUserApiError = null
        this.users = []

    }


    @action.bound
    clearStore() {

        this.init()
    }

    @action.bound
    setUserAPIResponse(users) {
        this.users = users.map((eachUser) => eachUser.name)
        // this.getUsersApiStatus = API_SUCCESS


    }
    @action.bound
    setUserAPIError(error) {
        this.getUserApiError = error
        //this.getUsersApiStatus = API_FAILED


    }
    @action.bound
    setUsersAPIStatus(apiStatus) {

        this.getUsersApiStatus = apiStatus
    }

    @action.bound
    getUser() {

        const userPromise = this.userService.getUsers()
        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setUsersAPIStatus, this.setUserAPIResponse)
            .catch(this.setUserAPIError)
    }



}

export default UsersStore
