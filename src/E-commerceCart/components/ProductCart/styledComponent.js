

import tw from 'tailwind.macro'
import styled from '@emotion/styled'







const ProductsCart=styled.div`${tw`h-screen items-center bg-gray-800 text-white`}
width:350px`
const Icon=styled.div `${tw`items-center flex  justify-center mr-4`}`
const ProductCartEntireContent=styled.div`${tw`flex   
 overflow-auto items-start justify-end`}
transition-delay:5s;`
const HideCheckButton=tw.div`bg-gray-800 text-white p-1 text-xl`
const NoOfProductStoreText=tw.p`relative -ml-6  text-orange-500 text-sm`
const CartWrapper=tw.div`flex flex-col justify-between border-t-2 border-solid border-white-500  h-screen`
const SubTotalAndCheckButtonWrapper=tw.div``
const AddSomeProductsIntoCart=tw.p`flex items-center h-full justify-center`

export{ProductsCart,Icon,ProductCartEntireContent,AddSomeProductsIntoCart,HideCheckButton,NoOfProductStoreText, CartWrapper,SubTotalAndCheckButtonWrapper} 
