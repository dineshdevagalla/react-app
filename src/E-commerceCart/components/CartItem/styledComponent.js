import tw from "tailwind.macro"
import styled from  '@emotion/styled'


const ProductInCartContent=tw.div`flex text-sm my-2 items-center relative`
const ProductTitle=tw.h3`text-white`
const ProductStyle=tw.p`text-gray-500 text-xs`
const ProductPriceText=tw.p`text-yellow-600 ml-auto`
const ProductQuantity=tw.p`text-gray-500 text-xs`
const CancelProductInCartButton=tw.button`font-bold absolute top-0 right-0`
const ProductImage=tw.img`w-12 object-contain`
const ProductDetails=tw.div`ml-2 flex-1`



export  {ProductInCartContent,ProductTitle,ProductStyle,ProductPriceText,ProductQuantity,CancelProductInCartButton,ProductImage,ProductDetails}