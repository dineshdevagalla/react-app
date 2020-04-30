import { observable, action, computed } from 'mobx'


import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import Todo from '../models/todo'
class TodoStore {



    @observable todos
    @observable selectedFilter
    @observable getTodosApiStatus
    @observable getTodosApiError
    todosService

    constructor(todoService) {
        this.init()
        this.todosService = todoService
    }
    init() {
        this.todos = []
        this.selectedFilter = "All"
        this.getTodosApiStatus = API_INITIAL
        this.getTodosApiError = null
    }

    setTodosApiStatus = (apiStatus) => {
        console.log(apiStatus)
        this.getTodosApiStatus = apiStatus

    }
    setTodosApiError = (error) => {
        this.getTodosApiStatus = error

    }
    setTodosApiResponse = (todos) => {

        todos.map(eachTodo => this.onAddTodo(eachTodo.userId, eachTodo.id, eachTodo.title, eachTodo.completed))
    }





    @action.bound onAddTodo(userId, id, title, completed) {

        const todoObject = {
            userId: userId,
            id: id,
            title: title,
            completed: completed
        }
        this.todos.push(new Todo(todoObject))

    }




    @action.bound onRemoveTodo(deletedModelId) {
        const finalTodos = this.todos.filter(eachModel => {
            return eachModel.id != deletedModelId
        })
        this.todos = finalTodos
    }




    @action.bound onChangeSelectedFilter(event) {

        this.selectedFilter = event.target.name
    }



    @action.bound onClearComplete() {
        let updatedTodo = this.todos.filter((item, index) => item.isCompleted === false)
        this.todos = updatedTodo
    }




    @action.bound
    getTodos() {
        const todosPromise = this.todosService.getTodos()
        console.log(todosPromise)
        return bindPromiseWithOnSuccess(todosPromise).to(this.setTodosApiStatus, this.setTodosApiResponse)
            .catch(this.setTodosApiError)
    }
    @computed get activeTodosCount() {
        let count = this.todos.filter(eachModel => {
            return eachModel.isCompleted === false
        })

        return count.length
    }
    @computed get filteredTodos() {
        switch (this.selectedFilter) {
            case "active":
                return this.todos.filter(eachModel => eachModel.isCompleted === false)
            case "complete":
                return this.todos.filter(eachModel => eachModel.isCompleted === true)
            case "All":
                return this.todos
        }

    }

}
export default TodoStore
