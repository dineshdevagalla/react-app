import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'
import EventModel from '../models/Events/eventModel.js'
import { reaction } from 'mobx'
class EventStore {
    @observable events = []


    @action.bound onAddEvent(title, location) {
        console.log("hiii")
        const eventModel = new EventModel(title, location)
        this.events.push(eventModel)
    }

    @action.bound onDeleteEvent(event) {
        console.log(event.target.id)
        const finalEvents = this.events.filter(eachModel => {

            return eachModel.id != event.target.id
        })
        this.events = finalEvents

    }



    @computed get noOfeventsCount() {}
}

const eventStore = new EventStore()
export default eventStore
