import { SigninRoute } from './SignInRoute'
import { signInPath } from '../constants/'
import { Route } from "react-router-dom";
import React from 'react'




export const authenticationRoute = [
    <Route key={signInPath} path={signInPath} component={SigninRoute}></Route>
]
