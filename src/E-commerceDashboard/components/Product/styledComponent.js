import  tw from 'tailwind.macro'
import styled from '@emotion/styled'


export const CartItemContent=styled.div`${tw`flex flex-col  border border-transparent border-solid  m-2 items-center p-2 relative`}
:hover{
    border:1px solid black
}`
export const ProductImage=tw.img `w-48 object-contain  mb-2`
export const ProductTitle =tw.p `h-45px text-center`
export const ProductBorder=tw.div`w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4`
export const ProductPriceAndText=tw.p``
export const ProductText=tw.span`text-xs mr-1`
export const ProductPrice=tw.span`text-xl`
export const ProductInstallement =tw.p `text-sm text-gray-700 mb-4 h-5`
export const AddToCartButton=tw.button`w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`
export const FreeShippingAvaliable=tw.p`absolute top-10 right-0 bg-black p-1 text-xs text-white`