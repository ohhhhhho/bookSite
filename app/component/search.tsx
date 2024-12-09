export function Search({
    searchText,
    setSearchText,
  }: {
    searchText: string
    setSearchText: React.Dispatch<React.SetStateAction<string>>
  }){
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      //값이 비었으면 종료
      if (searchText.trim() === '') return
      //검색한 input을 지워주는 역할
      setSearchText('')
    }
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      //onChange될때마다 value값이 들어간다.
      setSearchText(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-row gap-6 items-center justify-end mt-4 mx-20 mb-8">
                <label htmlFor="search" className="text-sm text-neutral-400">책 제목 또는 작가 이름을 검색하세요</label>
                <input type="text" id="search" onChange={handleChange} value={searchText} className="bg-transparent ring-1 ring-neutral-400 focus:outline-offset-1.5 focus:outline-neutral-400 rounded-sm py-1 px-2"/>
            </form>
        </>
    );
}