import React from 'react'
import {Route,Redirect}  from 'react-router-dom'
import {getAccessToken} from '../../Authentication/utils/StorageUtils'
import {signInPath} from '../../Authentication/constants/'
import {observer} from "mobx-react"

class ProtectedRoute extends React.Component{
    render(){ 
     const {path,component:Component}=this.props
       if( getAccessToken())
       {
         
          return <Route path={path} component={Component} />
       }   
       
       else{
        
        
          return  <Redirect to={{pathname:signInPath}}/> 
       }
    
    
}
}

export {ProtectedRoute}