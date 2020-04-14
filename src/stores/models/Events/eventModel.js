"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var EventModel = /** @class */ (function () {
    function EventModel(EventModelObejct) {
        this.name = EventModelObejct.name;
        this.Location = EventModelObejct.Location;
        this.id = EventModelObejct.id;
    }
    EventModel.prototype.onUpdateEventDetails = function () {
    };
    EventModel.prototype.updateTodo = function (event) {
        this.name = event.target.value;
    };
    __decorate([
        mobx_1.observable
    ], EventModel.prototype, "name");
    __decorate([
        mobx_1.observable
    ], EventModel.prototype, "Location");
    __decorate([
        mobx_1.action.bound
    ], EventModel.prototype, "onUpdateEventDetails");
    __decorate([
        mobx_1.action.bound
    ], EventModel.prototype, "updateTodo");
    return EventModel;
}());
exports["default"] = EventModel;
