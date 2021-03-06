import React from "react"
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

@observer
class MouseCoordinates extends React.Component {
    @observable mouseCoordinateAxis = { x: 0, y: 0 }
    @action.bound
    handleMouseMove(event) {

        this.mouseCoordinateAxis = { x: event.clientX, y: event.clientY }

    }



    render() {
        const { render } = this.props
        return (render(this.mouseCoordinateAxis, this.handleMouseMove))

    }



}
export { MouseCoordinates }
