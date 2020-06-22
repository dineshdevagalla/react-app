import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';


import { InputElement } from '../../../Common/components/InputElement/InputElement'
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
            <FormPage>
                <SignInText className="">Sign in</SignInText>
                <InputElement ref={this.userNameRef}  type="text"  defaultValue={userName} onChange={onChangeUserName} placeholder="Username"/>
                <InputElement ref={this.passwordRef}   type="password"  defaultValue={password} onChange={onChangePassword} placeholder="Password" />
                <SignInButton onClick={onClickSignIn}  type="button">Sign in</SignInButton>
                <ErrorMessagetext>{errorMessage}</ErrorMessagetext>
                    
            </FormPage>
        );

    }
}

export default SignIn
