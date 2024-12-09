'use client'
import { useRouter } from 'next/navigation';
import { useBookStore } from '../zustand';

export default function DeleteButton({ bookId }: { bookId: number }){
    const deleteBook = useBookStore(state => state.deleteBook)
    const router = useRouter()  
    //삭제 이벤트
    const onDelete = () => {
        deleteBook(bookId) 
        router.back()
    }
    return(
    <>
        <button onClick={onDelete}>삭제하기</button>
    </>
    )
}