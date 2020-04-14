import React from 'react'
import Event from './event'




class EventList extends React.Component {




    render() {
        const events = this.props.stateProps.events.map(eachEvent => (<div key={eachEvent.id.toString()}><Event eachModel={eachEvent}  deleteFunction={this.props.stateProps.onDeleteEvent}/></div>))
        return (
            <div className="border border-solid border-black">{events}</div>

        )
    }

}

export default EventList
