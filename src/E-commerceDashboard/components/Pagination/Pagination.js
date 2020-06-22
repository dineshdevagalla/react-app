import React from 'react'
import { observer } from 'mobx-react'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import ReactPaginate from 'react-paginate'
//
// @observer
// class Pagination extends React.Component {

//     render() {
//         const { onClickNextPage, onClickPreviuosPage, totalPages, currentPageNumber } = this.props

//         return (<div className="flex justify-center items-center">
//                  <button disabled= {currentPageNumber!==1?false:true} className="text-4xl text-white bg-black m-1"  onClick={onClickPreviuosPage}><IoIosArrowBack /></button>
//                  <span className="text-2xl px-2 border border-solid border-black m-1">{currentPageNumber}</span>
//                  <span className="text-xl m-1 ">/</span>
//                  <span className="text-2xl p-2 border  m-1">{totalPages}</span>
              

//               <button disabled= {currentPageNumber!==totalPages?false:true}  className="text-4xl text-white bg-black m-1" onClick={onClickNextPage}><IoIosArrowForward /></button>
//           </div>)
//     }
// }
// 


@observer
class Pagination extends React.Component{
    
    render(){
           const {currentPage,updateCurrentPage, pageCount}=this.props;
          
    
        return (<ReactPaginate
                  pageCount={pageCount}
                  forcePage={currentPage}
                  disabledInitialCallBack={true}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={2}
                  previousLabel={<button>&lt;</button>}
                  nextLabel={<button>&gt;</button>}
                  onPageChange={updateCurrentPage}
                  containerClassName="flex"
                  pageClassName='flex justify-center rounded-sm border-solid border-2 border-black items-center p-2 h-6 w-6 m-1'
                  activeClassName='active border-solid border-4 p-1 border-black'
        
        />)
    }
    
    
}
export { Pagination }