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
function addBook() {

    const bookName = getElementValue('bookName');
    const authorName = getElementValue('authorName');
    const bookDescription = getElementValue('bookDescription');
    const pageNumber = parseInt(getElementValue('pagesNumber'));

    

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