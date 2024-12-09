import { bookData } from "@/bookData";
import { IBook } from "@/type";
import { create } from "zustand";

export interface BookState {
    books: IBook[];
    deleteBook: (id: number) => void;
    addBook: (book: IBook) => void; 
    updateBook: (book: IBook) => void; 
}
  
export const useBookStore = create<BookState>((set) => ({
    books: bookData.books, 
    deleteBook: (id) => set((state) => ({
        books: state.books.filter((book) => book.id !== (+id))
    })),
    addBook: (newBook) => set((state) => ({
        books: [...state.books, { 
            ...newBook, 
            id: state.books.length > 0 
            ? Math.max(...state.books.map(b => b.id)) + 1 
            : 1 
        }]
    })),
    updateBook: (updatedBook) => set((state) => ({
        books: state.books.map((book) => 
            book.id === updatedBook.id ? { ...book, ...updatedBook } : book
        )
    }))
}))