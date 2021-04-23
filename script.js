// DOM Elements
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popupContainer = document.getElementById('popup-container');
const notificationContainer = document.getElementById('notification-container');
const finalMessage = document.getAnimations('final-message');

const figurePart = document.querySelectorAll('.figure-part');

//Main Array for different words
// Make an rewuest to a free API so that the user can get a different word each time, for now we use hardcoded words

let words = ['error', 'javascript', 'programming', 'frontend', 'backend', 'agile', 'interface', 'experience', 'wizard', 'html'];

//Selecting random word
let selectedWord = words[Math.floor(Math.random() * words.length)];

//Correct Letters
const correctLetters = [];

//Wrong Letters
const wrongLetter = [];

//Display the words function
function displayWords() {
       wordEl.innerHTML = `
              ${selectedWord}
       `
}




