import React from 'react'
import { withToggle } from '../../hocs/withToggle'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import tw from 'tailwind.macro'
import styled from '@emotion/styled'
const ViewEditToggleContentWrapper = styled.div `${tw``}`
const ClickEditButtonContent = styled.div `${tw`flex`}`

@observer
class ViewEditToggle extends React.Component {
    @observable value = "Click on the edit button to start editting "


    @action.bound
    onEditChange(event) {

        this.value = event.target.value

    }


    render() {
        
        const { onToggle, toggleStatus } = this.props
        return (
            <ViewEditToggleContentWrapper>
               <h2>ViewEditToggle</h2>
               <ClickEditButtonContent>
                {toggleStatus?
                <input onChange={this.onEditChange} type="text" value={this.value}/>:
                <p>{this.value}</p>}
                <button onClick={onToggle}>{toggleStatus?"Cancel":"Edit"}</button>
               </ClickEditButtonContent>
            </ViewEditToggleContentWrapper>

        )


    }

}

export default withToggle(ViewEditToggle)
