import React from 'react'
import { observer } from 'mobx-react'


import { TodoStore } from '../../stores/TodoStore/todoStore'






@observer
class TodosFotter extends React.Component {
  render() {
    let clearCompleteButton = ""
    const { stateProps } = this.props
    let countOfcompletedtodos = stateProps.todos.filter(eachitem => eachitem.isCompleted == true)
    if (countOfcompletedtodos.length > 0) {
      clearCompleteButton = <button onClick={stateProps.onClearComplete}> Clear Complete</button>
    }
    return (<div>
          <span>{stateProps.activeTodosCount} items left</span>
            <button onClick={stateProps.onChangeSelectedFilter} name="All">All</button>
            <button onClick={stateProps.onChangeSelectedFilter} name="active">active</button>
            <button onClick={stateProps.onChangeSelectedFilter} name="complete">complete</button>
              {clearCompleteButton}
          
        </div>)

  }
}

export default TodosFotter
