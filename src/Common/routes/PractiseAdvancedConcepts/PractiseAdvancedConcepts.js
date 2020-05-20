import React from 'react'
import { observer } from 'mobx-react'

import { ViewEditToggle } from '../../components/ViewEditToggle'
import { CollapseExpand } from '../../components/CollapseExpand'
import { DisplayTypeText } from '../../components/DeviceTypeText'
import { DisplayMouseCoordinates } from '../../components/DisplayMouseCoordinates'
@observer
class PractiseAdvancedConcepts extends React.Component {

    render() {


        return (<div className="flex flex-col items-center justify-center m-8 p-8">
             <h1>Hoc's Usage</h1>
            <ViewEditToggle/>
            <CollapseExpand list={["Eggs","Bread"]}/>
            <DisplayTypeText/>
            <h1>Render Props Usage</h1>
            <DisplayMouseCoordinates/>
        
        </div>)
    }


}


export { PractiseAdvancedConcepts }
