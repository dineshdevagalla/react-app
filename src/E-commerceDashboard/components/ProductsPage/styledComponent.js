import tw from 'tailwind.macro'
import styled from '@emotion/styled'


const SizeButtonsContent=styled.div`${tw `` }
width:20%;
`
const HeaderAndProductsContent=styled.div`${tw``}width:75%`


const CartSymbol=styled.div`${tw` fixed right-0 top-0 z-10 h-screen`}`
const EntireUIpage=tw.div`w-screen p-4`
const SignUpButtonsAndUICartSeperation=tw.div`flex  items-center  justify-between`
const SignOutButton=tw.button`p-1 border border-current border-solid`
const SizeButtonsAndUIProductsSeperation=tw.div`flex`

export {SizeButtonsContent,HeaderAndProductsContent,EntireUIpage,SizeButtonsAndUIProductsSeperation,SignOutButton,SignUpButtonsAndUICartSeperation,CartSymbol}
