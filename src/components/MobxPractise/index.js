import React from 'react'
import { observable } from 'mobx'
import { autorun } from 'mobx'
import { Provider, inject } from 'mobx-react'

import { observer } from 'mobx-react'


@inject("temp")
class ProviderA extends React.Component {

    render() {
        const { temp, name } = this.props
        console.log(name)
        return (

            <div>{temp}</div>
        )
    }
}

@inject("temp")
@observer
class Providerb extends React.Component {
    @observable name



    handel = (event) => {
        this.name = event.target.value
    }

    render() {

        const { temp } = this.props
        return (

            <div>
            <input value={this.name} onChange={this.handel}/>
            
            <ProviderA name={this.name}/></div>
        )
    }




}

class Reaction extends React.Component {


    render() {


        return (
            <Provider temp={"diensh"}>
            <div><Providerb/></div>
            </Provider>
        )
    }




}


export default Reaction
