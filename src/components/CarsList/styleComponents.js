import React from 'react'
import  styled from '@emotion/styled'
import tw from 'tailwind.macro'

const  Carbody=styled.div `${tw`flex justify-center items-center flex-col`}`
const   Eachcar=styled.div `${tw` m-4 border-solid w-6/12`}`
const Startbutton=styled.button `${tw`border-none px-1 py-3 bg-green-700`}`
const  Stopbutton=styled.button `${tw`border-none px-1 py-3 bg-red-700`}`
export {Carbody,Eachcar,Startbutton,Stopbutton}