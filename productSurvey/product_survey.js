function submitFeedback() {
    const username = getFeedbackInput('name');
    const age = getFeedbackInput('age');
    const email = getFeedbackInput('email');
    const job = getFeedbackInput('job');
    const designation = getFeedbackInput('designation');
    const productType = getFeedbackInput('productType');
    const feedback = getFeedbackInput('feedbackText');

    displayFeedback('userName', username);
    displayFeedback('userAge', age);
    displayFeedback('userEmail', email);
    displayFeedback('userJob', job);
    displayFeedback('userDesignation', designation);
    displayFeedback('userProductChoice', productType);
    displayFeedback('userFeedback', feedback);

    document.getElementById('userInfo').style.display = 'block';

    alert('Thank you for your valuable feedback');

}

function getFeedbackInput(inputId) {
    return document.getElementById(inputId).value;
}

function displayFeedback(id, value) {
    document.getElementById(id).innerHTML = value;
}

const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        submitFeedback();
    }
})