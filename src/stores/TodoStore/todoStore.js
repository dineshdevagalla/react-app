import { observable, action, computed } from 'mobx'

import Todo from '../models/todo'
class TodoStore {
    @observable todos = []
    @observable selectedFilter = "All"



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
export { todoStore as default, TodoStore }
