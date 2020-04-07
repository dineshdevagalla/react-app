import React from 'react'
import  styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {css} from '@emotion/core'


const EmojiCardContent=styled.div `${tw`flex  flex-col justify-center  items-center m-6`} ${props=>({color:props.BackgroundColor.style.color,backgroundColor:props.BackgroundColor.emojiCardColor})}`
const EmojiImage=styled.img`${tw `w-64`}`
const EmojiName=styled.h3 `${tw`text-base`}`
export {EmojiCardContent,EmojiImage,EmojiName}