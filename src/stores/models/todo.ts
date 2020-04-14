
import { observable,action} from 'mobx'

class Todo {
    @observable title:string=''
    @observable isCompleted:boolean
    id:string=""
    constructor(title:string, status:boolean) 
    {
        this.title = title
        this.isCompleted = status
        this.id = Math.random().toString()
    }
    @action.bound checkTheTodo() {
        this.isCompleted = !this.isCompleted
    }
    @action.bound updateTodo(event)
    {
         this.title = event.target.value
    }




}
export default Todo
