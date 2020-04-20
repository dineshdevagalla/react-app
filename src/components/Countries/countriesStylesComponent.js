import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

const CountryDashBoard = styled.div `${props=>({
                       backgroundColor:props.theme.backgroundColor,
                       color:props.theme.color})}`

const CountryProperties = styled.div `${tw`flex  flex-wrap justify-around`}`

const CountryCardStyle = styled.div `${tw`w-200 h-300 flex flex-col text-15px font-thin m-2 shadow-2px `}`

const FilterBarDiv = styled.div `${tw`flex  items-center justify-between`} `

const InputField = styled.input `${tw `w-200 p-3 border-none `}${props=>({color:props.theme.color,backgroundColor:props.theme.backgroundColor})} `

const WhereInTheWorld = styled.p `${tw`text-3xl font-semibold `}`

const ThemeOptionButton = styled.button `${tw`border-none text-2xl shadow-2px`} ${props=>({color:props.theme.color,backgroundColor:props.theme.backgroundColor})}`

const HeaderDiv = styled.div `${tw`flex justify-between items-center shadow-2px mb-px`}`

const SelectedRegionDiv = styled.select `${tw` appearance-none	 text-2xl shadow-2px `}${props=>({color:props.theme.color,backgroundColor:props.theme.backgroundColor})}`

const InputFieldAndSearchIconDiv = styled.div `${tw `flex justify-center items-center shadow-2px`}`

export {
 CountryProperties,
 CountryCardStyle,
 FilterBarDiv,
 InputField,
 WhereInTheWorld,
 ThemeOptionButton,
 HeaderDiv,
 SelectedRegionDiv,
 InputFieldAndSearchIconDiv,
 CountryDashBoard

}
