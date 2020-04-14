import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import { reaction } from 'mobx'

import EventModel from '../models/Events/eventModel.js'

class EventStore {
    @observable events:Array<EventModel> = []


    @action.bound onAddEvent(title, location) {
        const EventModelObject={
            name:title,
            Location:location,
            id:Math.random().toString()
        }
        
        
        const eventModel = new EventModel(EventModelObject)
        this.events.push(eventModel)
    }

    @action.bound onDeleteEvent(event) {
        console.log(event.target.id)
        const finalEvents = this.events.filter(eachModel => {

            return eachModel.id != event.target.id
        })
        this.events = finalEvents

    }




const eventStore = new EventStore()
export default eventStore
