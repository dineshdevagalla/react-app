import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
@observer
class AddEvent extends React.Component {
    @observable eventName = ''
    @observable eventLocation = ''



    onAddEVent = (event) => {
        this.props.stateProps.onAddEvent(this.eventName,this.eventLocation)
         this.eventName=''
         this.eventLocation=''

    }


    onChangeEventName = (event) => {

        this.eventName = event.target.value

    }
    onChangeEventLocation = (event) => {
        this.eventLocation = event.target.value

    }
    render() {
        return (<div>
            
            <form  >
        <div>
          <input type="text" value={this.eventName} onChange={this.onChangeEventName} />
        </div>
         <div>
          <input type="text" value={this.eventLocation}  onChange={this.onChangeEventLocation} />
        </div>
        <input type="reset"  value="AddEvent" onClick={this.onAddEVent} />
    
       
      </form>
            </div>)

    }
}
export default AddEvent
