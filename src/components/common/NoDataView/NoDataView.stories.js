import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, color } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react';
import { NoDataViewContainer, NoDataViewText } from "./styledComponents";
import tw from 'tailwind.macro'


import NoDataView from '.'
export default {
    component: NoDataView,
    title: 'Common/defaultView',
    decorators: [withKnobs]
}
export const defaultView = () => <NoDataViewText style={{color:`${color("text-color","")}`}}>  <NoDataView />   </NoDataViewText>
