## 책 사이트
1. 실제 API가 아닌 가상의 데이터를 가지고 작업을 하였습니다.
2. bookData를 공통적으로 사용하기 위해 Zustand를 이용해 사용하였습니다.

### 배포 사이트
<https://book-site-jet.vercel.app>

### Home
1. 책 목록 구현 -> 페이지네이션 -> 검색 순서대로 작업하였습니다.
#### 책목록 구현
1. 한 페이지에 10개씩 보여져야 하기에 displayedBooks 변수에 10개씩 데이터 담는 함수를 구현하였습니다.
#### 페이지네이션
1. 컴포넌트를 만들어 이전, 숫자, 다음 버튼이 있는 마크업을 구현하였습니다.
2. 숫자 버튼을 구현하기 위해 calculatePaginationButtons 변수에 현재 페이지 위치인 startPage를 만들고 페이지 버튼 배열을 생성하였습니다.
3. home.tsx에 컴포넌트를 넣은 뒤 totalPages,currentPage,onClickPageChange를 props로 넘겨주었습니다.
#### 검색
1. 컴포넌트를 만들어 input 마크업을 구현하고, onChange이벤트를 등록하였습니다.
2. home.tsx에 컴포넌트를 넣은 뒤 
2-1. 검색어가 있다면 book의 title 또는 author이 있다면 그것들의 데이터만 배열로 return해주는 filterBooks 함수를 만들고
2-2. displayedBooks으로 책을 노출시키는 부분에 filter를 사용해 filterBooks함수를 넣어서 원하는 데이터만 받을 수 있도록 작업하였습니다.
2-3. 전체 페이지 계산 totalBooks 에도  filterBooks함수를 사용해 book의 length를 다르게 작업하였습니다.


### [id] 상세페이지
1. params의 id값을 받아와 zustand에 넣어둔 데이터를 가져와 출력하였습니다.

### update 수정페이지
1. params의 id값을 받아와 zustand에 넣어둔 데이터에서 id와 일치하는 데이터를 가지고 왔습니다.
2. useForm을 사용하여 작업하였고, defaultValues에 기존의 값을 넣어줬습니다.
3. form의 data를 받아와 onClickUpdate 이벤트를 사용해 updatedBook에 객체로 기존 데이터 복사 후 덮어쓰기로 새로운 데이터를 넣어줬습니다.

### delete 삭제이벤트
1. [id]/page.tsx에서 params.id값을 props로 넘겨받은 후 zustand에서 동일한 id를 찾아서 데이터를 삭제하였습니다.

### addBook 추가페이지
1. 새로운 값을 onClickAddData의 데이터로 받아 zustand abbBook으로 넘겨주었습니다.

### Zustand
1. books, deleteBook, addBook, updateBook 네가지 기능이 있습니다.
#### books
1. 초기 상태의 bookData.books 배열을 담고 있습니다.
#### deleteBook
1. books.id 와 전달받은 id가 같지 않을것을 배열로 리턴합니다. (특정 id를 가진 데이터 삭제)
#### addBook
1. 기존 books는 복사해두고 새로운 데이터를 넣어줍니다.
2. 새로운 id 값은 기존 데이터의 배열에서 가장 큰 id값에 1을 더해준 값이 된다.
#### updateBook
1. books.id 와 전달받은 id가 같다면 기존 데이터에 새로운 데이터를 덮어씌운다.
