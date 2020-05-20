import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

export const withToggle = (WrappedComponent) => {
    console.log("withToggle")
    @observer
    class EnhancedComponent extends React.Component {
        @observable toggleStatus = false
        @action.bound
        onToggle() {

            this.toggleStatus = !this.toggleStatus
        }

        render() {


            return (<WrappedComponent onToggle={this.onToggle} toggleStatus={this.toggleStatus} {...this.props}/>)
        }


    }

    return EnhancedComponent



}
