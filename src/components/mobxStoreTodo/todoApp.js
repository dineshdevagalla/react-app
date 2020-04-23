import React from 'react'
import { reaction, action, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { BallBeat } from 'react-pure-loaders'
import TodoList from './todoList'
import AddTodo from './addtodo'
import TodosFotter from './todoFotter'
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import NoDataView from '../common/NoDataView'

@inject("todoStore")
@observer
class TodoApp extends React.Component {
    reactionForCompletionOfActiveTods = reaction(() => (this.props.todoStore.activeTodosCount), (countofActiveTodos) => {
        if (countofActiveTodos == 0) {

            setTimeout(() => {
                alert("Hey You Completd All the Todos !")
            })
        }
    })
    componentDidMount() {
        console.log(this.props.todoStore)

        this.fetchingTodo()


    }
    @action.bound
    fetchingTodo = () => {
        this.props.todoStore.getTodos()
    }
    renderTodosList = () => {
        return this.props.todoStore.todos.length === 0 ?
            <NoDataView/> :
            <div>
             
            <TodoList stateProps={this.props.todoStore}/>
             {this.props.todoStore.activeTodosCount!=0&&<TodosFotter stateProps={this.props.todoStore}/>}  
             
            </div>
    }

    render() {
        console.log("todoapp")
        const { getTodosApiStatus, getTodosApiError } = this.props.todoStore
        return (

            <div style={{margin:"50px"}}>
            
              {<AddTodo stateProps={this.props.todoStore}/>}
              <LoadingWrapperWithFailure apiStatus={getTodosApiStatus}
                apiError={getTodosApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderTodosList}/>
               
                
            </div>
        )

    }

}
export default TodoApp
