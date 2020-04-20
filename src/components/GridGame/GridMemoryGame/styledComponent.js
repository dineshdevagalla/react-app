import styled from '@emotion/styled'
import tw from 'tailwind.macro'


const EntireGridGame = styled.div `${tw`w-screen h-screen  flex justify-center items-start p-10`}
background-color:${props=>props.themeColor};
color:${props=>props.fontColor};`
const HeaderAndRemainingContent = styled.div `${tw`flex flex-col justify-center items-center`}`


export { EntireGridGame, HeaderAndRemainingContent }
