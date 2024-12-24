function generateQuote() {
    const quotes = [
        "Life is what happens when you're busy making other plans.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The purpose of our lives is to be happy.",
        "Get busy living or get busy dying.",
        "You have within you right now, everything you need to deal with whatever the world can throw at you."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

let targetNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess-input').value);
    const feedback = document.getElementById('guess-feedback');
    if (guess === targetNumber) {
        feedback.textContent = "Correct! You guessed the number.";
        targetNumber = Math.floor(Math.random() * 10) + 1;
    } else if (guess < targetNumber) {
        feedback.textContent = "Too low. Try again!";
    } else {
        feedback.textContent = "Too high. Try again!";
    }
}

function toggleFaq(element) {
    const content = element.querySelector('.faq-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
