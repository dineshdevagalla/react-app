import tw from 'tailwind.macro'
import styled from '@emotion/styled'



const HeaderContent=styled.div`${tw`flex  items-center justify-between`}`
const NumberOfProducts=styled.div`${tw`ml-8`}`
const SelectSortBy=styled.div`${tw``}`
const SelectSortByText=tw.span``
const OnChangeSelectWrap=tw.select``
const SelectOption=tw.option``

export {HeaderContent,NumberOfProducts,SelectSortBy,SelectSortByText,OnChangeSelectWrap,SelectOption}