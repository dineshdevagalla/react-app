/* global ReactDOM*/
/*React*/

/*to classes required(1 for adding todolist 1 for  todo  entire function)
   1.todo entire function
    1.1  if user click checkbox need to  show tick and the input should be disabled
    1.2 if the user  un check the  check box the todo should be disabled
    1.3  if user click   into we should  remove that  entire todo
    1.4  need to kmow the count of no of active todos
    1.5  need to  filter all active and complete todos
    1.6  clear complete   should  be able to clear  all  completed todos 
    1.6.1  only show iif atleast there will be only atelst clear count 
 2.adding todo list
   2.1  should render the entire todo fucntion whenn user click entire dod in input field
   2.2    when user click  delete todo  should  dlete the  correspondind todo
   
*/
import React from 'react';
import './index.css'
let newTodoItems = []
class TodosFotter extends React.Component {
    constructor(props) {
        super(props)
    }
    DisplayFotter = (seletedFilter) => { { this.props.renderingFunction(seletedFilter) }
    }
    clearComplete = () => {

        (this.props.clearComplete())

    }
    render() {
        let button = ""
        let itemsLeft = 0
        let countOfcompletedtodos = this.props.fordisplaycount.filter(eachitem => eachitem.done == true)
        let countOFActivetodos = this.props.fordisplaycount.filter(eachitem => eachitem.done == false)
        if (countOfcompletedtodos.length > 0) { button = <button onClick={this.clearComplete}>clear Complete</button> } { countOFActivetodos.length == 1 ? itemsLeft = `${countOFActivetodos.length} item left` : itemsLeft = `${countOFActivetodos.length} items left` }
        console.log(itemsLeft)

        if (this.props.forFotterDisplay.length > 0) {
            return (<div>
             <span className="for-count-of-active-todos">{itemsLeft}</span>
            <button onClick={() => this.DisplayFotter('All')}>All</button>
            <button onClick={() => this.DisplayFotter('Active')}>active</button>
            <button onClick={() => this.DisplayFotter('Complete')}>complete</button>
            {button}
        </div>)
        }
        else {
            return null;
        }
    }
}
class Todos extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div className="content">
          <input defaultChecked={this.props.done} id={this.props.id} onClick={this.props.checkingTodo} type="checkbox"className="check-button" />
          <input  disabled={(this.props.done===true)? true:false} className="content-input" defaultValue={this.props.todoItem}  type="text" name="" />
          <button onClick={this.props.removingTodo} id={this.props.id} className="delete-button">X</button>
        </div>
        )
    }
}
class AddingTodos extends React.Component {
    constructor(props) {
        super(props)
        this.state = { todoItems: [], eachId: 0, fotterType: "All" }
    }
    GettingInput = event => {
        if (event.keyCode === 13) {
            newTodoItems = this.state.todoItems.slice(0)
            let newId = this.state.eachId += 1
            newTodoItems.push({ Id: newId, todo: event.target.value, done: false })
            event.target.value = ""
            this.setState({
                todoItems: newTodoItems
            })
        };
    }
    removingTodoFromList = (event) => {
        let remainingTodos = this.state.todoItems.filter((item, index) =>
            item.Id !== parseInt(event.target.id)
        )
        this.setState({
            todoItems: remainingTodos
        })
    }
    functionForUpdatingCheckboxInObject = event => {
        let checkBoxUpdated = this.state.todoItems
        checkBoxUpdated.forEach(eachitem => {
            if (event.target.id == eachitem.Id) {
                eachitem.done = !eachitem.done
            }

        })
        this.setState({ todoItems: checkBoxUpdated })
        console.log(this.state.todoItems)
    }
    functionForsetStateOfFotter = (typeOfFotter) => {
        this.setState({ fotterType: typeOfFotter })
    }
    clearComplete = () => {
        let updatedTodo = this.state.todoItems.filter((item, index) =>
            item.done == false)

        console.log(updatedTodo)
        this.setState({ todoItems: updatedTodo })
    }
    RenderingTodos = () => {
        let resolved
        if (this.state.fotterType == "Active") {
            resolved = this.state.todoItems.map(eachItem => {
                if (!eachItem.done) {
                    return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
             removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
                }
            })
        }
        else if (this.state.fotterType == "Complete") {
            resolved = this.state.todoItems.map(eachItem => {
                if (eachItem.done) {
                    return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
             removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
                }
            })
        }

        else if (this.state.fotterType == "All") {
            resolved = this.state.todoItems.map(eachItem => {
                return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
      removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
            })

        }
        else {
            resolved = this.state.todoItems.map(eachItem => {
                return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
      removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
            })
        }

        return (resolved)
    }

    render() {
        return (
            <div>
      <input   onKeyDown={this.GettingInput} className="todo-input" id="input" type="text" placeholder="what need to be done?" name="" />
        <div>{this.RenderingTodos()}</div>
       <div> <TodosFotter forFotterDisplay={newTodoItems} renderingFunction={this.functionForsetStateOfFotter} clearComplete={this.clearComplete}
        fordisplaycount={this.state.todoItems}/></div>
       
      </div>
        )
    }

}

export { AddingTodos }
