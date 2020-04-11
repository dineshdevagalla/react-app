import React from 'react'
import EventList from './eventList.js'
import AddEvent from './addEvent.js'
import { observer } from 'mobx-react'
import eventStore from '../../stores/EventStore/EventStore.js'
import { reaction } from 'mobx'


@observer
class EventApp extends React.Component {

    render() {
        return (

            <div style={{margin:"50px"}}>
              <AddEvent stateProps={eventStore}/>
            {eventStore.events.length!=0 && <EventList stateProps={eventStore}/>}
              
            </div>
        )

    }

}
export default EventApp
