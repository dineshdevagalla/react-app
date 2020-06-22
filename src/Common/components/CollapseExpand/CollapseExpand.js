import React from "react"
import { withToggle } from '../../hocs/withToggle'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
@observer
class CollapseExpand extends React.Component {
    @action.bound
    renderShoppingList() {
        const { list } = this.props
        return list.map(eachProduct => (<div key={eachProduct}>{eachProduct}</div>))
    }



    render() {
        const { onToggle, toggleStatus, list } = this.props
        return (
            <div>
              <h2>Collapse Expand</h2>
              <div className="flex">
              <span>Sample Shopping List:</span>
             {toggleStatus?<div>
             <button onClick={onToggle}>Collapse</button>
              {this.renderShoppingList()}
             </div>:<button onClick={onToggle}>Expand</button>} 
              
              </div>
            
            </div>
        )
    }

}

export default withToggle(CollapseExpand)
