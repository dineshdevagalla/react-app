import React from 'react'
import { withKnobs, text, object, color } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react';



import Loader from '.'

export default {
    component: Loader,
    title: 'Common/LoaderView'

}


//color("label", "blue")
//export const defaultView = () => <NoDataViewText style={{color:`${color("text-color","")}`}}>  <NoDataView />   </NoDataViewText>

export const LoaderDefaultView = () => <Loader/>
