'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PageNation from '../component/pagenation';
import { BOOKS_PER_PAGE } from '@/constans';
import { useBookStore } from '../zustand';
import { Search } from '../component/search';
import { IBook } from '@/type';

// 검색 로직을 함수로 분리
function filterBooks(book: IBook, searchText: string) {
  if (searchText) {
    return book.title.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase());
  } else {
    return true;
  }
}
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const books = useBookStore(state => state.books)
  const [searchText, setSearchText] = useState('');

  // 전체 페이지 수 계산
  const totalBooks = searchText ? books.filter(book => filterBooks(book, searchText)).length : books.length;
  const totalPages = Math.ceil(totalBooks / BOOKS_PER_PAGE)

  // 현재 페이지에 보여줄 책들 인덱스 ((1 - 1) * 10)번부터 ((1 * 10)번까지
  const displayedBooks = books.slice(
    (currentPage - 1) * BOOKS_PER_PAGE, 
    currentPage * BOOKS_PER_PAGE
  )
  // 페이지 변경 이벤트
  const onClickPageChange: (newPage: number) => void = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }
  //검색 사용할때 페이지 1번으로 변경
  useEffect(() => {
    setCurrentPage(1)
  }, [searchText])
  return (
    <div className='mb-10'>
      {/* 검색 */}
      <Search searchText={searchText} setSearchText={setSearchText} />
      {/* 책 목록 */}
      <ul className="grid grid-cols-5 gap-y-16 gap-x-10 px-20 box-border  mx-auto">
        {displayedBooks.filter(book => filterBooks(book, searchText))
        .map(book => (
          <li key={book.id}>
            <Link href={`/${book.id}`} className="flex flex-col gap-4">
              <span className="w-full h-40 ring-1 ring-neutral-300">책표지</span>
              <span>제목 : {book.title}</span>
              <span>작가 : {book.author}</span>
              <span>남은수량 : {book.quantity}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* 페이지네이션 */}
      <PageNation currentPage={currentPage} totalPages={totalPages} onClickPageChange={onClickPageChange}/>
    </div>
  );
}