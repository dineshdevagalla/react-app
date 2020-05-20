import React from 'react'
import { MouseCoordinates } from '../MouseCoordinates'
import { observer } from 'mobx-react'
@observer
class DisplayMouseCoordinates extends React.Component {
    render() {


        return (
            <div >
            <h1>Dispaly Mouse Coordinates</h1>
               <MouseCoordinates render={(mouseCoordinates,handleMouseMove)=>(<div onMouseMove={handleMouseMove}>The mouse position ({mouseCoordinates.x},{mouseCoordinates.y})</div>)
    }
    />

    </div>
)
}
}

export default DisplayMouseCoordinates
