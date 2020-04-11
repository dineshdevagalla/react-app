// import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'

// import stores from '../../stores'
// const counterStore = stores.counterStore

// @observer
// class CounterPage extends Component {
//   handleIncrement = () => {
//     counterStore.incrementCounter()
//   }

//   handleDecrement = () => {
//     if (counterStore.count !== 0) {
//       counterStore.decrementCounter()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{counterStore.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </div>
//     )
//   }
// }

// export default CounterPage

import React from 'react'
import {observer} from 'mobx-react'
import CounterStore from '../../stores/CounterStore'
const counterStore= new CounterStore()
const decrement=counterStore.onDecrementCounter
@observer
class CounterApp extends React.Component
{
  
 onDecrement=()=>{
     
    //  counterStore.onDecrementCounter()
     decrement()
 }
 onIncrement=()=>{
      counterStore.onIncrementCounter()
 }
 onChangeCount=(event)=>{
     counterStore.onChangeCount(event.target.value)
 }


render(){
  
  return(
    <div>
    <h1>Counter</h1>
     <div>
     
     <button onClick={this.onDecrement}>-</button>
     <input type="text" value={counterStore.count} onChange={this.onChangeCount}/>
     <button onClick={this.onIncrement}>+</button>       
     </div>
     
     
     
    </div>
    
    
    
    )
  
}

  
  
}


export default CounterApp