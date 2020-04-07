import React from 'react'

import {withRouter} from 'react-router-dom'

class BackButton extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.history.goBack}> Back</button>
            </div>
            )
    }
}
export {BackButton}