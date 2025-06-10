// Basic credit card form script
function updateCard() {
    // Get the card number input
    var cardNum = document.getElementById('cardNumber').value;
    var cardDisplay = document.querySelector('.card-number');
    
    // Show the card number on the card
    if (cardNum.length > 0) {
        cardDisplay.textContent = cardNum;
    } else {
        cardDisplay.textContent = '1234 5678 9012 3456';
    }
}

function updateName() {
    // Get the name input
    var name = document.getElementById('cardHolder').value;
    var nameDisplay = document.querySelector('.card-holder-name');
    
    // Show the name on the card
    if (name.length > 0) {
        nameDisplay.textContent = name.toUpperCase();
    } else {
        nameDisplay.textContent = 'YOUR NAME';
    }
}

function updateExpiry() {
    // Get month and year
    var month = document.getElementById('expiryMonth').value;
    var year = document.getElementById('expiryYear').value;
    var expiryDisplay = document.querySelector('.expiry-date');
    
    // Show expiry date
    if (month && year) {
        expiryDisplay.textContent = month + '/' + year;
    } else {
        expiryDisplay.textContent = 'MM/YY';
    }
}

function updateCVV() {
    // Get CVV input
    var cvv = document.getElementById('cvv').value;
    var cvvDisplay = document.querySelector('.cvv-display');
    
    // Show CVV
    if (cvv.length > 0) {
        cvvDisplay.textContent = cvv;
    } else {
        cvvDisplay.textContent = '123';
    }
}

function flipCard() {
    // Flip the card when CVV is focused
    var cardFront = document.querySelector('.card-front');
    var cardBack = document.querySelector('.card-back');
    
    cardFront.style.transform = 'rotateY(180deg)';
    cardBack.style.transform = 'rotateY(0deg)';
}

function flipCardBack() {
    // Flip card back to front
    var cardFront = document.querySelector('.card-front');
    var cardBack = document.querySelector('.card-back');
    
    cardFront.style.transform = 'rotateY(0deg)';
    cardBack.style.transform = 'rotateY(180deg)';
}

function submitForm() {
    // Check if all fields are filled
    var cardNumber = document.getElementById('cardNumber').value;
    var cardHolder = document.getElementById('cardHolder').value;
    var cvv = document.getElementById('cvv').value;
    var month = document.getElementById('expiryMonth').value;
    var year = document.getElementById('expiryYear').value;
    
    if (cardNumber == '' || cardHolder == '' || cvv == '' || month == '' || year == '') {
        alert('Please fill out all fields!');
        return false;
    }
    
    alert('Payment submitted!');
    return false; // Don't actually submit
}

// Add event listeners when page loads
window.onload = function() {
    // Card number input
    document.getElementById('cardNumber').onkeyup = updateCard;
    
    // Name input
    document.getElementById('cardHolder').onkeyup = updateName;
    
    // Expiry inputs
    document.getElementById('expiryMonth').onchange = updateExpiry;
    document.getElementById('expiryYear').onchange = updateExpiry;
    
    // CVV input
    document.getElementById('cvv').onkeyup = updateCVV;
    document.getElementById('cvv').onfocus = flipCard;
    document.getElementById('cvv').onblur = flipCardBack;
    
    // Form submit
    document.getElementById('creditCardForm').onsubmit = submitForm;
};