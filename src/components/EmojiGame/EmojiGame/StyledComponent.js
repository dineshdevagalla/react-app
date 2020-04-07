import React from 'react'
import  styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {css} from '@emotion/core'


const AllEmojiCards=styled.div `${tw`flex flex-wrap justify-around`} ${props=>({backgroundColor:props.backgroundColor.bodyColorOfEmojiComponet})}`
export{AllEmojiCards}