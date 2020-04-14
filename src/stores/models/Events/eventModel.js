import React from 'react'
import { observable, action } from 'mobx'






class EventModel {

    @observable name
    @observable Location
    id
    constructor(EventModelObejct) {
        this.name = EventModelObejct.name
        this.Location = EventModelObejct.Location
        this.id = EventModelObejct.id

    }

    @action.bound onUpdateEventDetails() {


    }
    @action.bound updateTodo(event) {

        this.name = event.target.value
    }




}
export default EventModel
