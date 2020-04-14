"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var todo_1 = require("../models/todo");
var TodoStore = /** @class */ (function () {
    function TodoStore() {
        this.todos = [];
        this.selectedFilter = "All";
    }
    TodoStore.prototype.onAddTodo = function (title, status) {
        var todo = new todo_1["default"](title, status);
        this.todos.push(todo);
    };
    TodoStore.prototype.onRemoveTodo = function (deletedModelId) {
        var finalTodos = this.todos.filter(function (eachModel) {
            return eachModel.id != deletedModelId;
        });
        this.todos = finalTodos;
    };
    TodoStore.prototype.onChangeSelectedFilter = function (event) {
        this.selectedFilter = event.target.name;
    };
    TodoStore.prototype.onClearComplete = function () {
        var updatedTodo = this.todos.filter(function (item, index) { return item.isCompleted === false; });
        this.todos = updatedTodo;
    };
    Object.defineProperty(TodoStore.prototype, "activeTodosCount", {
        get: function () {
            var count = this.todos.filter(function (eachModel) {
                return eachModel.isCompleted === false;
            });
            return count.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoStore.prototype, "filteredTodos", {
        get: function () {
            switch (this.selectedFilter) {
                case "active":
                    return this.todos.filter(function (eachModel) { return eachModel.isCompleted === false; });
                case "complete":
                    return this.todos.filter(function (eachModel) { return eachModel.isCompleted === true; });
                case "All":
                    return this.todos;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], TodoStore.prototype, "todos");
    __decorate([
        mobx_1.observable
    ], TodoStore.prototype, "selectedFilter");
    __decorate([
        mobx_1.action.bound
    ], TodoStore.prototype, "onAddTodo");
    __decorate([
        mobx_1.action.bound
    ], TodoStore.prototype, "onRemoveTodo");
    __decorate([
        mobx_1.action.bound
    ], TodoStore.prototype, "onChangeSelectedFilter");
    __decorate([
        mobx_1.action.bound
    ], TodoStore.prototype, "onClearComplete");
    __decorate([
        mobx_1.computed
    ], TodoStore.prototype, "activeTodosCount");
    __decorate([
        mobx_1.computed
    ], TodoStore.prototype, "filteredTodos");
    return TodoStore;
}());
exports.TodoStore = TodoStore;
var todoStore = new TodoStore();
exports["default"] = todoStore;
