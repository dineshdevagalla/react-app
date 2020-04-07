import React from 'react'
import {Carbody,Eachcar,Stopbutton,Startbutton} from './styleComponents.js'
class Car extends React.Component {
       constructor(props) {
       super(props)
       this.state = { possibleValues: "stopped", speed: 0 }
       }
 onStartOrStop = () =>
 {
      if (this.state.possibleValues == "stopped")
        {
          this.setState({
          possibleValues: "Running"
               
          })
             
        }
      else
      {
            this.setState({
                  possibleValues: "stopped"
                  
            })
      }
     
 } 
onApplyBrake = () => {
     if(this.state.speed>0)
     {
    this.setState({speed:this.state.speed-=10})
     }
}

onAccelerate = () => {
    if(this.state.possibleValues=="Running"){
    this.setState({
        speed: this.state.speed += 10
    })
         
    }
}

 render() {
          let  StartAndSTartButton=
           this.state.possibleValues=="Running"? <Startbutton onClick={this.onStartOrStop}>start</Startbutton>:
           <Stopbutton onClick={this.onStartOrStop}>stop</Stopbutton>
  return (
   <Eachcar>
   <p>Car:{this.props.id}</p>
   <div>
   {StartAndSTartButton}

   <button onClick= {this.props.removeCarFromCarsList}
   id={this.props.id}> X</button>
   </div>
   <div>
   {"status:"}{this.state.possibleValues=="Running"? this.state.speed>0 ?`running with speed ${this.state.speed} KMPH`:'Running':'stopped'}
   </div>
   <button onClick={this.onAccelerate}> Accelerator</button>
   <button onClick={this.onApplyBrake}> Decelerator</button>
   </Eachcar>
   )
 }
     
}

class CarsList extends React.Component {
 constructor(props) {
  super(props)
  this.state = { carId:[1] }
 }
 addCarToCarsList = () => {
      const prevState=this.state.carId.slice(0)
      const lengthOfCarId=prevState.length;
      const lastCarId = prevState[lengthOfCarId - 1];
      const newCarId = lastCarId + 1;
      prevState.push(newCarId)
      if(isNaN(prevState[0])){
         prevState[0]=parseInt(1)  
      }
      this.setState({
          carId:prevState
      })
 }
 removeCarFromCarsList = (event) => {
      
          let remainingCars = this.state.carId.filter((item,index)=>
              item!==parseInt(event.target.id)
          )
          this.setState({
              carId:remainingCars
          })
 }
 renderCarsList = () => {
                 return(this.state.carId.map(eachId=>{
           return <Car key={eachId} id={eachId} 
            removeCarFromCarsList={this.removeCarFromCarsList}/>
           })
          )
 }
render()
{
   return(  <div>
            <button onClick={this.addCarToCarsList}>Add Car</button>
             
             <Carbody>{this.renderCarsList()}</Carbody>
           </div>
     
         )
}
}

export {CarsList}