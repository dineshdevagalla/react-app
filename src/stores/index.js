import UsersStore from './UsersStore'
import TodoStore from './TodoStore/todoStore.js'
import UserService from '../Services/UserService/index.api.js'
import TodoService from '../Services/TodosService/index.api.js'


const userService = new UserService()
const usersStore = new UsersStore(userService)

const todoService = new TodoService()
const todoStore = new TodoStore(todoService)
export default { usersStore, todoStore }
