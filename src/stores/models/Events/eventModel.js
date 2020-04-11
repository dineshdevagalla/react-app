import React from 'react'
import { observable, action } from 'mobx'
class EventModel {

    @observable title
    @observable isCompleted
    constructor(title, location) {
        this.name = title
        this.Location = location
        this.id = Math.random()

    }

    @action.bound onUpdateEventDetails() {


    }
    @action.bound updateTodo(event) {

        this.title = event.target.value
    }




}
export default EventModel
