import React from 'react'
import { observer } from 'mobx-react'

import { ViewEditToggle } from '../../components/ViewEditToggle'
import {CollapseExpand} from '../../components/CollapseExpand'
@observer
class PractiseAdvancedConcepts extends React.Component {

    render() {


        return (<div className="flex flex-col items-center justify-center m-8">
            <ViewEditToggle/>
            <CollapseExpand list={["Eggs","Bread"]}/>
        
        </div>)
    }


}


export { PractiseAdvancedConcepts }
