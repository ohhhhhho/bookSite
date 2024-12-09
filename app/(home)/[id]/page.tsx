'use client'
import DeleteButton from "@/app/component/deleteButton";
import { useBookStore } from "@/app/zustand";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default function BookDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params)
  
    const book = useBookStore(state => state.books.find(i => i.id === +id!))

    // id가 숫자가 아니라면 404 처리
    if (isNaN(+id) || !book) {
      return notFound();
    }
    return(
        <>
        <div className="ring-1 mx-auto ring-neutral-500 p-10 rounded-xl w-4/6">
            <div className="flex flex-col">
                <span>제목 : {book?.title}</span>
                <span>작가 : {book?.author}</span>
                <span>줄거리 : {book?.description}</span>
                <span>남은 수량 : {book?.quantity}</span>
            </div>
            <div className="flex flex-row gap-4 mt-6 *:text-white *:ring-1 *:ring-neutral-400 *:py-2 *:px-4 *:text-xs">
                <Link href={`${id}/update`}>수정하기</Link>
                <DeleteButton bookId={book?.id}/>
            </div>
        </div>
        </>
    )
}