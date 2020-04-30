import React from "react"
import { observable } from 'mobx'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import { getAccessToken, setAccessToken} from '../../utils/StorageUtils.js'
@observer
class LoginPage extends React.Component {
    @observable name
    @observable password

    authenication = () => {
        setAccessToken(this.password)
        this.name = ""
        this.password = ""
    }
    userName = (event) => {
        console.log(event.target.value)
        this.name = event.target.value

    }
    userPassword = (event) => {

        this.password = event.target.value
    }
    render() {
        console.log(getAccessToken(),1)
        if (getAccessToken()) {

            return (<Redirect to={{pathname:"/projects"}}/>)

        }
        else {

            return (

                <div className="flex flex-col justify-center items-center" >
 
 <div><span>UserName:</span><input value={this.name} onChange={this.userName} className="my-1" type="text"/><br></br></div>
 <div><span>password:</span><input  value={this.passsword} onChange={this.userPassword} type="text"/><br></br></div>
<button onClick={this.authenication} className="m-1">Login</button>

 
 
 </div>
            )
        }

    }

}
export default LoginPage 
