// use an array for our collection of books
let books = [];


/**
 * adds a book to our collection of books
 * gets information from the html elements
 * and stores it in an object literal
 * pushes the book onto the array
 * updates the HTML with the new book
 * and clears the form inputs
 * 
 * alerts the user and fails if any information is missing
 */
const addBook = () => {

    const bookName = getElementValue('bookName');
    const authorName = getElementValue('authorName');
    const bookDescription = getElementValue('bookDescription');
    const pagesNumber = parseInt(getElementValue('pagesNumber'));

    // diverting from the lab instructions here
    // I think it's a better idea to construct the book
    // so it can be validated as a whole
    const book = {
        name: bookName,
        authorName: authorName,
        bookDescription: bookDescription,
        pagesNumber: pagesNumber
    }

    // it also cleans up the if/else statement; reducing to just a quick
    // exit if// it also cleans up the if/else statement; reducing to just a quick
    // exit if statement
    if(!isValidBook(book)) {        
        alert('Please fill in all fields correctly.');
        return;
    } 

    books.push(book);

    // I don't really like this so much
    // couples logic with display (shrug)
    renderBooks();
    clearInputs();
}

/**
 * renders the list of books to HTML document
 */
const renderBooks = () => {
    const booksDiv = books.map((book, index) => buildBookHtml(book, index));
    document.getElementById('books').innerHTML = booksDiv.join('');
}

/**
 * builds HTML string for supplied book
 * uses index as id 
 * 
 * @param {Object} book 
 * @param {number} index 
 * @returns String
 */
const buildBookHtml = (book, index) => {
    return `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>`;
}

/**
 * Edits the given book
 * @param {number} index 
 */
const editbook = (index) => {
    const book = books[index];
    setElementValue('bookName',book.name);
    setElementValue('authorName', book.authorName);
    setElementValue('bookDescription', book.bookDescription);
    setElementValue('pagesNumber', book.pagesNumber);
    books.splice(index, 1); // Remove old entry
    renderBooks(); // Refresh list
}

/**
 * Deletes the book at the given index
 * 
 * Should check if book exists but that's for another time
 * 
 * @param {number} index 
 */
const deletebook = (index) => {
    books.splice(index, 1);
    renderBooks();
}

/**
 * clears all HTML inputs
 */
const clearInputs = () => {
    clearInput('bookName');
    clearInput('authorName');
    clearInput('bookDescription');
    clearInput('pagesNumber');
}

/**
 * Clears the input with given id
 * 
 * @param {number} id 
 */
const clearInput = (id) => {
    setElementValue(id, '');
}

/**
 * convienience method to get the value of an HTML input field
 * 
 * @param {String} id 
 * @returns String
 */
const getElementValue = (id) => {
    return document.getElementById(id).value;
}

/**
 * Sets the HTML value of the element with the given id
 * 
 * @param {String} id 
 * @param {String} value 
 */
const setElementValue = (id, value) => {
    document.getElementById(id).value = value;
}

/**
 * Checks that the properties of the book are valid
 * name, author, and description must not be empty
 * pages should be a number
 * 
 * @param {Object} book 
 * @returns 
 */
const isValidBook = (book) => {
    let result = book.name && book.authorName && book.bookDescription && !isNaN(book.pagesNumber);
    return result;
}