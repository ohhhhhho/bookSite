'use client'
import InputField from "@/app/component/input";
import { useBookStore } from "@/app/zustand"
import { IBook } from "@/type";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function BookUpdate({params}:{params:Promise<{id:string}>}){
    const { id } = React.use(params);
    //현재 id와 일치하는 book객체 찾기
    const book = useBookStore(state => state.books.find(b => b.id === +id))
    const updateBook = useBookStore(state => state.updateBook)
    //form을 위한 hook으로 defaultValues에 데이터가 있을시 기존 데이터 값을 넣어준다.
    const { register, handleSubmit, formState: { errors } } = useForm<IBook>({
        defaultValues: book ? {
          author: book.author,
          title: book.title,
          description: book.description,
          quantity: book.quantity
        } : {}
    });

    //업데이트 이벤트
    const onClickUpdate = (data: IBook) => {
        //form에서 전달받은 데이터를 기존 데이터를 복사후 넣어준다.
        const updatedBook ={
            ...book,
            id: +id, 
            author: data.author, 
            title: data.title,
            description: data.description,
            quantity: data.quantity
        }
        //업데이트 실행
        updateBook(updatedBook)
        //업데이트 종료 후 상세페이지로 이동
        redirect(`/${id}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit(onClickUpdate)}  className="mx-auto px-20 flex flex-col gap-4">
            <InputField
                id="title"
                label="제목"
                type="text"
                register={register}
                requiredMessage="제목은 필수로 입력하셔야합니다."
                error={errors.title}
            />
            <InputField
                id="description"
                label="줄거리"
                type="text"
                register={register}
                requiredMessage="줄거리는 필수로 입력하셔야합니다."
                maxLength={100}
                minLength={30}
                maxLengthMessage="최대 100글자 이하입니다."
                minLengthMessage="최소 30글자 이상 입니다."
                error={errors.description}
            />
            <InputField
                id="author"
                label="작가"
                type="text"
                register={register}
                requiredMessage="작가는 필수로 입력하셔야합니다."
                error={errors.author}
            />
            <InputField
                id="quantity"
                label="수량"
                type="number"
                register={register}
                requiredMessage="수량은 필수로 입력하셔야합니다."
                min={1}
                minMessage="수량은 1 이상이어야 합니다."
                error={errors.quantity}
            />
            <button className="block ring-1 ring-neutral-200 py-3 px-10 text-center hover:bg-white hover:text-black">수정하기</button>
        </form>
        </>
    )
}