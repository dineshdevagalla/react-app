import React from 'react'
import TodoList from './todoList.js'
import AddTodo from './addtodo.js'
import { observer } from 'mobx-react'
import todoStore from '../../stores/TodoStore/todoStore.js'
import TodosFotter from './todoFotter.js'
import { reaction } from 'mobx'
@observer
class TodoApp extends React.Component {

    reactionForCompletionOfActiveTods = reaction(() => (todoStore.activeTodosCount), (countofActiveTodos) => {
        if (countofActiveTodos == 0) {

            let id = setTimeout(() => {
                alert("Hey You Completd All the Todos !")
            })
            reaction.dispose()
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
