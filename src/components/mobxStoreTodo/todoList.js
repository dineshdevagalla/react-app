import React from 'react'

import { observer } from 'mobx-react'
@observer
class TodoList extends React.Component {

    todosList = () => {
        const listOfTodos = this.props.stateProps.filteredTodos.map(toDoModel => {
            console.log(toDoModel)
            return <div key={toDoModel.id.toString()}>
           <input defaultChecked={toDoModel.isCompleted}  onClick={toDoModel.checkTheTodo}  type="checkbox"className="check-button" />
           <input  type="text" value={toDoModel.title} onChange={toDoModel.updateTodo} name="" />
           <button onClick={()=>this.props.stateProps.onRemoveTodo(toDoModel.id)}    className="delete-button">X</button>
          </div>
        })
        return listOfTodos


    }

    render() {
        console.log("render")
        return (

            <div>{this.todosList()}</div>

        )

    }


}
export default TodoList
