import { Book } from "./Book";

export class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    getListBooks(): Book[] {
        return this.books;
    }
    
    getTotalNumberOfBooks(): number {
        return this.books.length;
    }

    removeBook(title: string): void {
        this.books = this.books.filter(book => book.title !== title);
    }
}
