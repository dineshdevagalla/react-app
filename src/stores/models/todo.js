import { observable, action } from 'mobx'

class Todo {
    @observable title = ''
    @observable isCompleted
    id = ""
    constructor(title, status) {
        this.title = title
        this.isCompleted = status
        this.id = Math.random().toString()
    }
    @action.bound checkTheTodo() {
        this.isCompleted = !this.isCompleted
    }
    @action.bound updateTodo(event) {
        this.title = event.target.value
    }




}
export default Todo
