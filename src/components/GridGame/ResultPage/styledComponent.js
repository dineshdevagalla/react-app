import tw from 'tailwind.macro'
import styled from '@emotion/styled'
const PlayAgainButton = styled.button `${tw`  border-black p-1  w-1/4 border text-1xl  font-semibold bg-indigo-500`}`
const GameResultContent = styled.div `${tw`  text-2xl font-semibold flex flex-col items-center justify-around`}
height:50vh`
const CompletedContent = styled.div `${tw`text-teal-400`}`



export { PlayAgainButton, GameResultContent, CompletedContent }
