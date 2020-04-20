import styled from '@emotion/styled'
import tw from 'tailwind.macro'




const CellStyle1 = styled.div `${tw `my-1 `}
background-color:${props=>props.cellColor};
width:${props=>props.width}px;
height:${props=>props.width}px;`



const CellStyle2 = styled.div `${tw `my-1 `}
background-color:${props=>props.cellColor};
width:${props=>props.width}px;
height:${props=>props.width}px;`

export { CellStyle1, CellStyle2 }
