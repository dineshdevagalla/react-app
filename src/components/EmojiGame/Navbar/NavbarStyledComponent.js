import React from 'react'
import  styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {css} from '@emotion/core'




const HeaderContent =styled.div `${tw`flex justify-between  items-center`} ${props=>({backgroundColor:props.themeColor.style.backgroundColor,
    color:props.themeColor.style.color
})}`
const ScoreStatus=styled.div  `${tw`flex  justify-around`}`
const GameName=styled.h1 `${tw` font-semibold`}`
const Score=styled.h1 `${tw`text-base font-bold mr-5`}`
const TopScore=styled.h1 `${tw`text-base font-bold mr-5`}`
const ThemeButton=styled.button `${tw`text-base border-solid p-2`}${props=>({borderColor:props.buttonColor.buttonBorderColor,color:props.buttonColor.style.color})}`

export{HeaderContent,ScoreStatus,GameName,Score,TopScore,ThemeButton}