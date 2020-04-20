import React from 'react'
import { reaction, action, observable } from 'mobx'
import { observer } from 'mobx-react'
import { BallBeat } from 'react-pure-loaders'
import todoStore from '../../stores/TodoStore/todoStore'

import TodoList from './todoList'
import AddTodo from './addtodo'
import TodosFotter from './todoFotter'


@observer
class TodoApp extends React.Component {

    @observable Loading = true
    @observable errorHandling = false

    reactionForCompletionOfActiveTods = reaction(() => (todoStore.activeTodosCount), (countofActiveTodos) => {
        if (countofActiveTodos == 0) {

            setTimeout(() => {
                alert("Hey You Completd All the Todos !")
            })
        }



    })




    componentDidMount() {

        this.fetchingTodo()


    }
    @action.bound
    fetchingTodo = () => {
        this.errorHandling = false
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
            .then(res => res.forEach(eachTodo => {
                todoStore.onAddTodo(eachTodo.userId, eachTodo.id, eachTodo.title, eachTodo.completed), this.Loading = false
            })).
        catch(res => this.errorHandling = true)
    }

    render() {
        console.log(this.Loading)
        return (

            <div style={{margin:"50px"}}>
              <AddTodo stateProps={todoStore}/>
              {this.Loading?this.errorHandling?
              <p>Error occured</p>:<p><BallBeat loading={true} color={"red"}/></p>:
              
                todoStore.todos.length?<TodoList stateProps={todoStore}/>:<p>no data found</p>
            
            
            
              }
            
            
            { todoStore.todos.length!=0 && <TodosFotter stateProps={todoStore}/>}
            
            </div>
        )

    }

}
export default TodoApp
