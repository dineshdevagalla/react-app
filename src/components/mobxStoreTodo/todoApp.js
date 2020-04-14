import React from 'react'
import { reaction } from 'mobx'
import { observer } from 'mobx-react'

import todoStore from '../../stores/TodoStore/todoStore'

import TodoList from './todoList'
import AddTodo from './addtodo'
import TodosFotter from './todoFotter'



@observer
class TodoApp extends React.Component {

    reactionForCompletionOfActiveTods = reaction(() => (todoStore.activeTodosCount), (countofActiveTodos) => {
        if (countofActiveTodos == 0) {

            setTimeout(() => {
                alert("Hey You Completd All the Todos !")
            })
        }



    })




    render() {
        return (

            <div style={{margin:"50px"}}>
              <AddTodo stateProps={todoStore}/>
            {todoStore.todos.length!=0 && <TodoList stateProps={todoStore}/>}
            { todoStore.todos.length!=0 && <TodosFotter stateProps={todoStore}/>}
            
            </div>
        )

    }

}
export default TodoApp
