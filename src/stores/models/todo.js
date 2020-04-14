"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var Todo = /** @class */ (function () {
    function Todo(title, status) {
        this.title = '';
        this.id = "";
        this.title = title;
        this.isCompleted = status;
        this.id = Math.random().toString();
    }
    Todo.prototype.checkTheTodo = function () {
        this.isCompleted = !this.isCompleted;
    };
    Todo.prototype.updateTodo = function (event) {
        this.title = event.target.value;
    };
    __decorate([
        mobx_1.observable
    ], Todo.prototype, "title");
    __decorate([
        mobx_1.observable
    ], Todo.prototype, "isCompleted");
    __decorate([
        mobx_1.action.bound
    ], Todo.prototype, "checkTheTodo");
    __decorate([
        mobx_1.action.bound
    ], Todo.prototype, "updateTodo");
    return Todo;
}());
exports["default"] = Todo;
