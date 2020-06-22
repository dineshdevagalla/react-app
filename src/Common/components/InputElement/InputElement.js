import React from 'react'

import { InputText } from './styledComponent.js'

export class InputElement extends React.Component {

    render() {
        const { type, placeholder, defaultValue, ref } = this.props

        return (<InputText ref={ref} type={type} placeholder={placeholder} defaultValue={defaultValue}></InputText>)
    }
}
