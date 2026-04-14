// delcare two variables; 
// these are undefined because they have not been initialized
let length;
let width;

/**
 * function declaration to calcualte the area;
 * this method is called by the HTML form submit button in calculate_Area.html
 */
function calculateArea() {
    //use document.getElementById to access the form fields
    //with user input
    //document is an object representing the html document context
    //getElementById finds and returns an html element where the id attribute
    //equals the value provided; in this case `width` and `length`
    //parseFloat is built in global javascript function that converts a string to a float (floating number) type
    //need number type in order to do the calculations
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    // calculate the area
    let area = length * width;

    //update the UI with the area by manipulating the DOM
    //this also demonstrates some cool template literals :)
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}