import React from 'react'

import { observer } from 'mobx-react'

import { TodoStore } from '../../stores/TodoStore/todoStore'

import Todo from '../../stores/models/todo'





@observer
class TodoList extends React.Component {

    todosList = () => {
        if (this.props.stateProps.filteredTodos) {
            const listOfTodos = this.props.stateProps.filteredTodos.map(toDoModel => {
                return <div className = "m-1"
                key = { toDoModel.id.toString()}>
                    <input defaultChecked={toDoModel.isCompleted}   onClick={toDoModel.checkTheTodo}  type="checkbox"className="check-button" />
           <input  type="text" value={toDoModel.title}  disabled={toDoModel.isCompleted} onChange={toDoModel.updateTodo} name="" />
           <button onClick = {() => this.props.stateProps.onRemoveTodo(toDoModel.id) } className="delete-button"> X </button> 
                        </div>
            })
            return listOfTodos

        }
    }

    render() {
        console.log('todoList')
        return (
            <div>{this.todosList()}</div>

        )

    }


}
export default TodoList
