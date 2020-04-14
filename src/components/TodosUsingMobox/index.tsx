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
import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'




let newTodoItems = []


class TodosFotter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: true }
    }
    DisplayFotter = (seletedFilter) => {
        console.log("hiiii")

        { this.props.renderingFunction(seletedFilter) }
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




@observer
class AddingTodosMobox extends React.Component {
    @observable todoItems = []
    @observable eachId = 0
    @observable fotterType = 'All'
    /*constructor(){
        super()
        this.todoItems=[]
       this.eachId=0
       this.fotterType="All"
    }*/
    @action.bound GettingInput(event) {
        if (event.keyCode === 13) {
            newTodoItems = this.todoItems.slice(0)
            let newId = this.eachId += 1
            newTodoItems.push({ Id: newId, todo: event.target.value, done: false })
            event.target.value = ""
            this.todoItems = newTodoItems

        };
    }
    @action.bound removingTodoFromList(event) {
        let remainingTodos = this.todoItems.filter((item, index) =>
            item.Id !== parseInt(event.target.id))
        this.todoItems = remainingTodos
    }
    @action.bound functionForUpdatingCheckboxInObject(event) {
        let checkBoxUpdated = this.todoItems
        checkBoxUpdated.forEach(eachitem => {
            if (event.target.id == eachitem.Id) {
                eachitem.done = !eachitem.done
            }
        })
        this.todoItems = checkBoxUpdated

    }
    @action.bound
    functionForsetStateOfFotter(typeOfFotter) {
        console.log(typeOfFotter)
        this.fotterType = typeOfFotter
        //this.eachId++;
        //this.setState({value:false});
        //console.log(this.fotterType)
    }
    @action.bound
    clearComplete() {
        let updatedTodo = this.todoItems.filter((item, index) => item.done == false)
        this.todoItems = updatedTodo
    }

    @computed get RenderingTodos() {

        let resolved
        if (this.fotterType == "Active") {
            resolved = this.todoItems.map(eachItem => {
                if (!eachItem.done) {
                    return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
                     removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
                }
            })
        }
        else if (this.fotterType == "Complete") {
            resolved = this.todoItems.map(eachItem => {
                if (eachItem.done) {
                    return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
                     removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
                }
            })
        }

        else if (this.fotterType == "All") {
            resolved = this.todoItems.map(eachItem => {
                return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
                removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
            })

        }
        else {
            resolved = this.todoItems.map(eachItem => {
                return <Todos key={eachItem.Id} id={eachItem.Id} todoItem={eachItem.todo} done={eachItem.done}
                 removingTodo={this.removingTodoFromList} checkingTodo={this.functionForUpdatingCheckboxInObject}/>
            })
        }

        return (resolved)
    }

    render() {
        console.log("render")
        const todosToBeRendered = this.RenderingTodos;
        return (
            <div>
            <input   onKeyDown={this.GettingInput} className="todo-input" id="input" type="text" placeholder="what need to be done?" name="" />
            <div>{todosToBeRendered}</div>
            <div> <TodosFotter forFotterDisplay={newTodoItems} renderingFunction={this.functionForsetStateOfFotter} clearComplete={this.clearComplete}
        fordisplaycount={this.todoItems}/></div>
       
      </div>
        )
    }

}








export { AddingTodosMobox }
