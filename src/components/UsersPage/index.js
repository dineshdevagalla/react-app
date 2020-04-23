import React from 'react'
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import NoDataView from '../common/NoDataView'


@inject("usersStore")
@observer
class UsersPage extends React.Component {

    componentDidMount() {

        this.doNetworkCalls()

    }
    doNetworkCalls = () => {
    
        this.props.usersStore.getUser()

    }
    renderUserList = () => {
        const { users } = this.props.usersStore
        if (users.length == 0) {
            return <NoDataView/>
        }
        return users.map((usersName) => <div>{usersName}</div>)
    }
    render() {
        const { getUsersApiStatus, getUserApiError } = this.props.usersStore
        console.log(getUsersApiStatus, getUserApiError)
        return (
            <div>
             <LoadingWrapperWithFailure apiStatus={getUsersApiStatus}
                apiError={getUserApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderUserList}/>
             </div>)
    }


}

export default UsersPage
