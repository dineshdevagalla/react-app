
import { observable, action, computed } from 'mobx'

import Todo from '../models/todo'
class TodoStore{
    @observable todos:Array<Todo> = []
    @observable selectedFilter = "All"



    @action.bound onAddTodo(title:string, status:boolean) {
        const todo = new Todo(title, status)
        this.todos.push(todo)
    }

    @action.bound onRemoveTodo(deletedModelId:string) {
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
const todoStore = new TodoStore()
export {todoStore as default, TodoStore}
