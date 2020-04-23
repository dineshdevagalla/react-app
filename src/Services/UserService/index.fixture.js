import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { networkCallWithApisauce } from '../../utils/APIUtils.js'
import userResponse from '../../fixtures/getUsersResponse.json'

class UserFixtureService {
    getUsers() {
        return new Promise((resolve, reject) => {

            Promise.resolve(userResponse)
        })
    }
}
export default UserFixtureService
