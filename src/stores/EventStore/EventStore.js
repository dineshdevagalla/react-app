"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var eventModel_js_1 = require("../models/Events/eventModel.js");
var EventStore = /** @class */ (function () {
    function EventStore() {
        this.events = [];
        this.eventStore = new EventStore();
    }
    EventStore.prototype.onAddEvent = function (title, location) {
        var EventModelObject = {
            name: title,
            Location: location,
            id: Math.random().toString()
        };
        var eventModel = new eventModel_js_1["default"](EventModelObject);
        this.events.push(eventModel);
    };
    EventStore.prototype.onDeleteEvent = function (event) {
        console.log(event.target.id);
        var finalEvents = this.events.filter(function (eachModel) {
            return eachModel.id != event.target.id;
        });
        this.events = finalEvents;
    };
    __decorate([
        mobx_1.observable
    ], EventStore.prototype, "events");
    __decorate([
        mobx_1.action.bound
    ], EventStore.prototype, "onAddEvent");
    __decorate([
        mobx_1.action.bound
    ], EventStore.prototype, "onDeleteEvent");
    return EventStore;
}());
