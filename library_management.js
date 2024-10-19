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

