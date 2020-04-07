import React from 'react'
import { MdArrowBack } from "react-icons/md"
import {withRouter} from 'react-router-dom'

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInputText: '', displayName: "" };

    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ userInputText: event.target.value });
    }

    handleSubmit = (event) => {
        this.setState({ displayName: `Hello ${this.state.userInputText}, have a  nice day!` })
        this.setState({ userInputText: "" })
        event.preventDefault();
    }
    displayMessage = () => {
        return this.state.displayName == "" ? null : this.state.displayName
    }
     backPage=()=>{
         this.props.history.goBack()
     }



    render() {
        return (
            <div>
            <div style={{backgroundColor:"Black",height:"30px"}}>
        <p onClick={this.backPage} style={{border:"none",color:"white"}}><MdArrowBack/>Greetings</p>
      </div>  
    
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.userInputText} onChange={this.handleChange} />
        </label>
        <div>
        <input type="submit" value="Greet" />
        </div>
        <div>{this.displayMessage()}</div>
      </form>
      </div>
        );
    }
}
export default withRouter(Greetings)
