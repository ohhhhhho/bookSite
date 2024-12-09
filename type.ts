export interface IBook{
    id: number;
    isbn?: string;
    title: string;
    author: string;
    description: string;
    quantity: number;
}
export interface IBookDetail{
    books:IBook[]
}
