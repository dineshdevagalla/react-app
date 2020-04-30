import tw from 'tailwind.macro'
import styled from "@emotion/styled"


const SizeChart=tw.div`flex flex-col`
const SizeText=tw.div`text-xl m-2 font-bold`
const ButtonsWrap=tw.div`flex flex-row flex-wrap`
const SizeButton=styled.button`${tw`h-10 w-10 m-1 flex justify-center items-center rounded-full`}
${props=>({backgroundColor:props.bgColorProp,color:props.color})}`
const SizeButtonsContent=styled.div `${tw ` ml-4 border `}`






export {SizeChart,SizeText,ButtonsWrap,SizeButton,SizeButtonsContent}