'use client'
import InputField from "@/app/component/input";
import { useBookStore } from "@/app/zustand";
import { IBook } from "@/type";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AddBook(){
    const abbBook = useBookStore(state => state.addBook)
    //form을 위한 hook으로 defaultValues에 데이터가 있을시 기존 데이터 값을 넣어준다.
    const { register, handleSubmit, formState: { errors } } = useForm<IBook>();
    const onClickAddData = (data:IBook) => {
        abbBook(data)
        redirect('/')
    }
    return(
        <>
            <form onSubmit={handleSubmit(onClickAddData)}  className="mx-auto px-20 flex flex-col gap-4">
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