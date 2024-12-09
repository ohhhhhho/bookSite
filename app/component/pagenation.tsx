import { PAGINATION_BUTTONS } from "@/constans"

interface Props{
    currentPage:number
    totalPages:number
    onClickPageChange:(newPage: number) => void
}

export default function PageNation({currentPage,totalPages,onClickPageChange}:Props){
    // 페이지네이션 버튼 계산
    const calculatePaginationButtons = () => {
    // 현재 페이지 몇번째인지 찾기
    const startPage = Math.floor((currentPage - 1) / PAGINATION_BUTTONS) * PAGINATION_BUTTONS + 1
    
    // 페이지 버튼 배열 생성
    const buttons = []
    for (let i = 0; i < PAGINATION_BUTTONS; i++) {
      //현재 페이지 번호 계산
      const pageNumber = startPage + i
      //전체 페이지 수 초과하면 반복 중단
      if (pageNumber > totalPages) break
      //버튼 배열에 추가
      buttons.push(pageNumber)
    }
    return buttons
  }

    return(
        <>
        <div className="flex justify-center items-center mt-10 space-x-2">
        {/* 이전 버튼 */}
        <button 
          onClick={() => onClickPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`
            px-3 py-1 rounded 
            ${currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'ring-1 ring-neutral-50 bg-neutral-950 text-white hover:bg-neutral-950'}
          `}
        >
          이전
        </button>

        {/* 숫자 페이지 버튼 */}
        {calculatePaginationButtons().map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => onClickPageChange(pageNumber)}
            className={`
              px-3 py-1 rounded ring-neutral-50
              ${currentPage === pageNumber 
                ? 'bg-neutral-950 text-white ring-1' 
                :  'text-neutral-600 hover:ring-1  hover:text-white'}
            `}
          >
            {pageNumber}
          </button>
        ))}

        {/* 다음 버튼 */}
        <button 
          onClick={() => onClickPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`
            px-3 py-1 rounded 
            ${currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'ring-1 ring-neutral-50 bg-neutral-950 text-white hover:bg-neutral-950'}
          `}
        >
          다음
        </button>
      </div>
        </>
    )
}