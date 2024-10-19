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

//Task 3: Create a Patron Class 

class Patron { // Define Patron class
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) { // Used to allow the patron to borrow a book if it is available and updates the book’s status
        if (book.isAvailable) { 
            book.isAvailable = false; // Used if else function to display message if book is not avaialbe
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}"`); //Message will display
        } else {
            console.log(` "${book.title}" is currently not available.`); //Message will display if otherwise
        }
    }
    returnBook(book) { // Used to allow the patron to return a borrowed book, making it available again.
        const index = this.borrowedBooks.indexOf(book);
        if(index !== -1) {
            book.isAvailable = true; 
            this.borrowedBooks.splice(index,1);
            console.log(`${this.name} returned "${book.title}"`); //Message will display if available
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`); //Message will display if otherwise 
        }
    }
}
//Task 4: Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron { // Define VIPPatron class that extents Patron class
    constructor(name, priority) {
        super(name);
        this.priority = priority;
    }
    
    borrowBook(book) { // Used to prioritize borrowing in case of competition with regular patrons
        if(this.priority) {
            console.log(`${this.name} (VIP) has priority to borrow "${book.title}"`); // Message will appear 
        }
        super.borrowBook(book); // Used to call the bowworBook method from the Patron class
    }
}

//Task 6: Create and Manage Sections and Patrons

//Sample Data
const fiction = new Section("Fiction"); // Sections
const science = new Section("Science");

//Sample Books
const book1 = new Book("The Truth", "Richard Floyd", "7395629385");
const book2 = new Book( "Cameron's World", "Cameron Johnson", "0294756389");
const book3 = new Book("The Life of Myia", "Myia Lamy", "0835278941");

//Used to add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

//Sample Patrons
const regularPatron2 = new Patron ("Kori Johnson"); 
const vipPatron2 = new VIPPatron("True Williams", true);

//Regular patron tries to borrow a book
regularPatron2.borrowBook(book1);

//VIP Patron tries to borrow a book
vipPatron2.borrowBook(book1);

//Book Return
regularPatron2.returnBook(book1);

//Used to specify books availability 
console.log(fiction.listBooks());

//Used to calculate and display total available books in each section 
console.log(`Total available books in fiction: ${fiction.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Science: ${science.calculateTotalBooksAvailable()}`);

