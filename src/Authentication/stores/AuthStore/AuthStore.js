import React from 'react'
import {observable,action} from 'mobx'
import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {setAccessToken,clearUserSession} from '../../utils/StorageUtils.js'
class AuthStore {
    
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    authAPIService
    constructor(AuthAPIService){
        this.init()
        this.authAPIService=AuthAPIService
    }
    
    @action
    init()
    {
       this.getUserSignInAPIStatus=API_INITIAL
       this.getUserSignInAPIError=null
    }
    @action.bound
     setUserAPIStatus(APIStatus){
         
       this.getUserSignInAPIStatus=APIStatus  
         
     }
    @action.bound
    setUserAPIError(APIError){
        this.getUserSignInAPIError=APIError
    }
    @action.bound
     setUserAPIResponse(ResponseTokken)
    {
        
        setTimeout(setAccessToken(ResponseTokken[0].access_token))
    }

    @action.bound
    userSignIn(){
        
        const AccessTokenPromise=this.authAPIService.getAccessTokken()
        
        return bindPromiseWithOnSuccess(AccessTokenPromise).to(this.setUserAPIStatus, this.setUserAPIResponse)
            .catch(this.setUserAPIError)
    }
    @action.bound
    userSignOut()
    
    {
           clearUserSession() 
        
        
        
    }
    
    
    
    
    
    
    
    
}





export default AuthStore