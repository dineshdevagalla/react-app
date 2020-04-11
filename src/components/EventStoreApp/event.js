import React from 'react'
import { observable } from 'mobx'

class Event extends React.Component {
    @observable isEdit = false
    @observable eventName = this.props.eachModel.name
    @observable eventLoction = this.props.eachModel.Location

    render() {
        const { eachModel, deleteFunction } = this.props


        return (
            <div key={eachModel.id.toString()}>
             <p>{eachModel.name}</p>
             <p>{eachModel.Location}</p>
             <button >Edit</button>
             <button id={eachModel.id} onClick={ deleteFunction}>delete</button>
            
            </div>

        )
    }



}

export default Event
