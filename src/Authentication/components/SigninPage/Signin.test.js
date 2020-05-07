import React from 'react'
import {render} from '@testing-library/react'
import SignIn from '.'

describe("SignInForm",()=>{
    
    it("should render typed username",()=>{
        
        const userName="username"
        const {getByPlaceholderText}=render(<SignIn userName={userName}/>)
        const userNameField=getByPlaceholderText("Username")
        
        expect(userNameField.value).toBe(userName)
    })
    
    
    it("should render typed password",()=>{
        const password="password"
        const {getByPlaceholderText}=render(<SignIn password={password}/>)
        const passwordField=getByPlaceholderText("Password")
        expect(passwordField.value).toBe(password)
    })
    
    
    
    it("should show Error Message",()=>{
        const {getByText}=render(<SignIn errorMessage="Invalid Entry"/>)
        getByText(/invalid Entry/i)
        
    })
    
    
    
})