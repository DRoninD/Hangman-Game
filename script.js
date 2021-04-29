// DOM Elements
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popupContainer = document.getElementById('popup-container');
const popup = document.querySelector('.popup');
const notificationContainer = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

//Main Array for different words
// Make an request to a free API so that the user can get a different word each time, for now we use hardcoded words

//Fetching different words

// let data = async function() {
//        let request = await fetch('https://random-words-api.vercel.app/');

//        let response = await request.json();

//        console.log(response);
      
// };
// data()
//still not working


//MAIN ARRAY OF RANDOM WORDS
let words = ['error', 'javascript', 'programming', 'frontend', 'backend', 'agile', 'interface', 'experience', 'wizard', 'html'];

//Selecting random word
let selectedWord = words[Math.floor(Math.random() * words.length)];

//Correct Letters
const correctLetters = [];

//Wrong Letters
const wrongLetters = [];


//Display the words function
function displayWords() {
       wordEl.innerHTML = `
              ${selectedWord
              .split('')
              .map(letter => `
              <span class="letter">
              ${correctLetters.includes(letter) ? letter : ''}</span>`)
              .join('')}
       `;

       //Removing the new line character
       const innerWord = wordEl.innerText.replace(/\n/g, '');

       //Checking if we have the selected word
       if(innerWord === selectedWord) {
              finalMessage.innerText = 'Congratulations! You have won!';
              popupContainer.style.display = 'flex';
       }
       
}

// Update the wrong letters
function updateWrongLetters() {
       //Display wrong words
    wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  // if(wrongLettersEl.innerHTML.length > 5) {
  //   wrongLettersEl.style.display = 'block';
  // }

  // Figure part
    figureParts.forEach((part, index) => {
      const errors = wrongLetters.length;

      if(index < errors) {
        part.style.display = 'block';
      } else {
        part.style.display = 'none';
      }
    });
  
    //Checking if we lost
    if(wrongLetters.length === figureParts.length) {
      finalMessage.innerText = `Unfotunately, you've lost`;
      popupContainer.style.display = 'flex';
    }

}

//Show notfication function
function showNotification() {
       //Adding the show class
       notificationContainer.classList.add('show');

       //Removing the show class
       setTimeout(() => {
              notificationContainer.classList.remove('show');  
       }, 2500)

}



//Keydown letter press
window.addEventListener('keydown', e => {
       // console.log(e.keyCode);
       if (e.keyCode >= 65 && e.keyCode <= 90) {
         const letter = e.key;
     
         if (selectedWord.includes(letter)) {
           if (!correctLetters.includes(letter)) {
             correctLetters.push(letter);
     
             displayWords();
           } else {
             showNotification();
           }
         } else {
           if (!wrongLetters.includes(letter)) {
             wrongLetters.push(letter);
     
             updateWrongLetters();
           } else {
             showNotification();
           }
         }
       }
     });

//Restart GAME
playAgainBtn.addEventListener('click', () => {
  //Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  //Picking random word
  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWords();

  updateWrongLetters();

  popupContainer.style.display = 'none';

})

// Calling the display function on page load
displayWords();


