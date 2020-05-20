import React from 'react'
import {withScreenSizeDetectors} from '../../hocs/withScreenSizeDetectors'
import {observer} from 'mobx-react'
@observer
class DisplayTypeText extends React.Component {

render(){
       const{deviceType}=this.props
    return(
        <div>
          
         <h1>DeviceTypeText</h1>
         <span>Device Type: {deviceType}</span>
        
        </div>
        
        
        )
    
}

}


export default withScreenSizeDetectors(DisplayTypeText)
