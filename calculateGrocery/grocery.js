/**
 * function to calculate the grocery total
 * uses the 3 form inputs
 */
function calculateTotalAmount() {
    let totalPrice = 0;
    for(let i = 1; i <= 3; i++) {
        let itemPrice = getGroceryItemPrice(i);
        totalPrice += itemPrice;
    }

    document.getElementById('result').innerText = `The total amount is:$  ${totalPrice}`;
}

/**
 * Get the grocery item price by the item number (1,2,3)
 * 
 * using another function to encapsulate common and repeated code
 * DRY - Don't repeat yourself. 
 * 
 * @param {number} itemNumber 
 * @returns number the price of the item
 */
function getGroceryItemPrice(itemNumber) {
    const price = document.getElementById("grocery-"+itemNumber).value;
    return parseFloat(price);
}

