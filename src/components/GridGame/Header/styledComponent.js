import styled from '@emotion/styled'
import tw from 'tailwind.macro'



const HeaderContent = styled.div `${tw`mb-10`}
width:${props=>props.width}px`
const TopLevel = styled.div `${tw`flex items-center justify-center`}`
const ThemeButton = styled.button `${tw`p-1 border text-2xl font-semibold`}`
const GameLevelAndThemeButton = styled.div `${tw`flex justify-between items-center`}`


export { HeaderContent, TopLevel, ThemeButton, GameLevelAndThemeButton }
