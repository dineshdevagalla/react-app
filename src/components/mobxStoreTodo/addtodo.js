import React from 'react'
import { TodoStore } from '../../stores/TodoStore/todoStore'




class Addtodo extends React.Component{

    onAddTodo = (event) => {
        if (event.keyCode === 13) {

            this.props.stateProps.onAddTodo(event.target.value, false)
            event.target.value = ""
        }
    }
    render() {
        return (<div>
            <input placeholder="What to do ?" type="text" onKeyDown={this.onAddTodo}/>
            </div>)

    }
}
export default Addtodo
