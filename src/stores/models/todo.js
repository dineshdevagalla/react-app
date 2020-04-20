import { observable, action } from 'mobx'

class Todo {
    @observable userId
    @observable title
    @observable isCompleted
    @observable id

    constructor(todoObject) {
        this.userId = todoObject.userId
        this.id = todoObject.id
        this.title = todoObject.title
        this.isCompleted = todoObject.completed
    }
    @action.bound checkTheTodo() {
        this.isCompleted = !this.isCompleted
    }
    @action.bound updateTodo(event) {
        this.title = event.target.value
    }




}
export default Todo
