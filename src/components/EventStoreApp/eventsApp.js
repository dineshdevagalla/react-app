import React from 'react'
import { observer } from 'mobx-react'

import eventStore from '../../stores/EventStore/EventStore'



import EventList from './eventList'
import AddEvent from './addEvent'





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
