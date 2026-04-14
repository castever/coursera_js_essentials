let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

/**
 * display the count in HTML
 * don't know why they are using innerHTML
 * there are risks of injection; however, because we know 
 * it will only be number controlled by us, it should be ok
 */
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if(count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers!  Keep it up!");
    } else if (count === 0) {
        alert("The count has been reset!");
    }
}

function resetCount() {
    count = 0;
    displayCount();
    checkCountValue();
}