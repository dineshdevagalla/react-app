import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
``
import { FormPage, SignInText, UserInputText, UserPasswordText, SignInButton, ErrorMessagetext } from './styledComponent.js'



@observer
class SignIn extends React.Component {

    userNameRef = React.createRef()
    passwordRef = React.createRef()
    componentDidMount() {


    }

    render() {

        const {
            userName,
            password,
            onChangeUserName,
            onChangePassword,
            onClickSignIn,
            errorMessage,
            apiStatus,
            //userNameRef,
            //passwordRef,
        } = this.props





        return (
            <FormPage  className="">
                <SignInText className="">Sign in</SignInText>
                <UserInputText ref={this.userNameRef}  type="text"  defaultValue={userName} onChange={onChangeUserName} placeholder="Username"/>
                <UserPasswordText ref={this.passwordRef}   type="password"  defaultValue={password} onChange={onChangePassword} placeholder="Password" />
                <SignInButton onClick={onClickSignIn}  type="button">{apiStatus===100?"Loading...":"Sign in"}</SignInButton>
                <ErrorMessagetext>{errorMessage}</ErrorMessagetext>
                    
            </FormPage>
        );

    }
}

export default SignIn
