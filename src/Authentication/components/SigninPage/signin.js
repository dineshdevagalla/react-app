import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable} from 'mobx';
import {withRouter,Redirect} from 'react-router-dom'
import Loader from 'react-loaders'

 
import {getAccessToken} from '../../utils/StorageUtils.js'


import {FormPage,SignInText,UserInputText,UserPasswordText,SignInButton,ErrorMessagetext} from './styledComponent.js'


@inject("authStore")
@observer
class SignIn extends React.Component {

    @observable userName = '';
    @observable password = '';
    @observable errorMessage="";

    constructor(props) {
        super(props);
        const { authStore } = this.props;
        
    }

    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }
    onChangePassword = (event) => {
        this.password = event.target.value;
    }
     onClickSignIn = async() => {
         const {getUserSignInAPIError}=this.props.authStore
         if(getUserSignInAPIError){
             this.errorMessage="Network Error"
             
         }
         
         else if (this.userName.length !== 0 && this.password.length !== 0) {
            const { history,authStore } = this.props;
            await authStore.userSignIn();
            history.push("/products");
            this.errorMessage=""
        }
        else if(this.userName.length===0){
            
            this.errorMessage="please Enter Username"
            
        }
        else if(this.password.length===0){
            
            this.errorMessage="please Enter Password"
        }
        
        
        
        
        
        
        

     }    
    render() {
        
           
        if(getAccessToken()){
            
            return <Redirect to={{pathname:"/products"}}/> 
        }
        else{
            
        return (
            <FormPage className="">
                <SignInText className="">Sign in</SignInText>
                <UserInputText type="text" className="" defaultValue={this.userName} onChange={this.onChangeUserName} placeholder="Username"/>
                <UserPasswordText type="password" className="" defaultValue={this.password} onChange={this.onChangePassword} placeholder="Password" />
                <SignInButton onClick={this.onClickSignIn} className="" type="button"><Loader type="ball-clip-rotate"/></SignInButton>
                    <ErrorMessagetext className="">{this.errorMessage}</ErrorMessagetext>
                    
            </FormPage>
        );
    }
}
}

export default withRouter(SignIn)