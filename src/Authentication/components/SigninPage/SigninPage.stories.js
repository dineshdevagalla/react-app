import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, color, select, array } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react';

//import '../../../styles/tailwind.css'
import { InputElement } from '../../../Common/components/InputElement/InputElement'

export default {
    component: InputElement,
    title: 'Common/InputElement',
    decorators: [withKnobs]
}





export const defaultView = () => <InputElement  />


const label = "Styles"

//const value = select(label, options, defaultValue)


export const withInputElementAction = () => <InputElement 
             className={array(label,"")}
            placeholder ={text('Label','UserName')}
            onChange = { action("Input Change") }/>




// export const withOnRetryAndErrorMessageProp = () => (
//   <FailureView
//       onRetryClick={action('retry clicked')}
//       errorMessage={'Failed'}
//   />
// )




// export const knobs = () => (
//   <FailureView
//       errorMessage={text('errorMessage', 'failed message')}
//       onRetryClick={action('retry clicked')}

//   />
// )



// knobs.story = {
//   decorators: [withKnobs]
// }
