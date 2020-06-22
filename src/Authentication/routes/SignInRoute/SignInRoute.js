import React from 'react'
import { inject } from 'mobx-react'
import { withRouter, Redirect } from 'react-router-dom'
import { observable } from 'mobx'
import SignIn from '../../components/SigninPage'
import { observer } from 'mobx-react'

import { getAccessToken } from '../../utils/StorageUtils'

@inject("authStore")
@observer
class SigninRoute extends React.Component {
    entireFormRef = React.createRef()

    @observable userName = '';
    @observable password = '';
    @observable errorMessage = "";

    constructor(props) {
        super(props);
        const { authStore } = this.props;


    }
    componentDidMount() {

        // this.entireFormRef.current.userNameRef.current.focus()
    }

    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }
    onChangePassword = (event) => {
        this.password = event.target.value;
    }
    onClickSignIn = async() => {
           alert(10)
        this.props.history.push("/ecommerce-store/products");
        if (this.userName.length !== 0 && this.password.length !== 0) {
            const { history, authStore } = this.props;


            await authStore.userSignIn();

            if (getAccessToken()) {
                
            }
            else {
                this.errorMessage = "Retry"
            }


        }
        else if (this.userName.length === 0 || this.userName === undefined) {
            //   this.entireFormRef.current.userNameRef.current.focus()
            //console.log(this.entireFormRef)
            this.errorMessage = "please Enter Username"

        }
        else if (this.password === '' || this.password === undefined) {
            this.errorMessage = "please Enter Password"
            //this.entireFormRef.current.passwordRef.current.focus()

        }

    }



    render() {

        const { getUserSignInAPIStatus } = this.props.authStore
        return (

            <SignIn onChangeUserName={this.onChangeUserName} 
            onChangePassword={this.onChangePassword}
            onClickSignIn={this.onClickSignIn}
            userName={this.userName}
            password={this.password}
            errorMessage={this.errorMessage}
            apiStatus={getUserSignInAPIStatus}
            //userNameRef={this.userNameRef}
            //passwordRef={this.passwordRef}
            ref={this.entireFormRef}
            />



        )
    }
}


export default withRouter(SigninRoute)
