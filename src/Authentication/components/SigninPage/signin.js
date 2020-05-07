import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable} from 'mobx';

import Loader from 'react-loaders'

 


import {FormPage,SignInText,UserInputText,UserPasswordText,SignInButton,ErrorMessagetext} from './styledComponent.js'



@observer
class SignIn extends React.Component {

    
    render() {
           
           const {userName,
           password,
           onChangeUserName,onChangePassword,
           onClickSignIn,
           errorMessage,
            apiStatus   
           }=this.props
           
               
        return (
            <FormPage className="">
                <SignInText className="">Sign in</SignInText>
                <UserInputText type="text"  defaultValue={userName} onChange={onChangeUserName} placeholder="Username"/>
                <UserPasswordText type="password"  defaultValue={password} onChange={onChangePassword} placeholder="Password" />
                <SignInButton onClick={onClickSignIn}  type="button">{apiStatus===100?"Loading...":"Sign in"}</SignInButton>
                <ErrorMessagetext>{errorMessage}</ErrorMessagetext>
                    
            </FormPage>
        );
    
}
}

export default SignIn