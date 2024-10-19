// Task 1: Create a Book Class

class Book { // Define Book class 
    constructor(title, author, ISBN) {
        this.title = title; 
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
    getDetails() { // Used to return book’s title, author, and ISBN
        return `${this.title} by ${this.author}, ISBN: ${this.ISBN}`;
    }
    get isAvailable() { // Used to identify if book is avaiable or borrowed
        return this._isAvailable;
    }
    set isAvailable(status) { // // Used to update the availability status of a book 
        this._isAvailable = status;
    }
}

//Task 2: Create a Section Class

class Section { // Define Section class
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) { // Used to add a book in the books array
        this.books.push(book);
    }
    getAvailableBooks() { // Used to return the total number of available books in the section
        return this.books.filter(book => book.isAvailable).length;
    }
    listBooks() { // Used to list all books in the section, showing their title and availability
        return this.books.map(book => `${book.title} - ${book.isAvailable ? 'Available' : 'Borrowed'}`).join('\n');
    }
    //Task 5
    calculateTotalBooksAvailable() { // Used to calculate the total number of books that are available for borrowing in the section
        return this.books.reduce((total, book) => total + (book.isAvailable ? 1 : 0), 0);
    }
}
