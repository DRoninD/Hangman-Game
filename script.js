// DOM Elements
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popupContainer = document.getElementById('popup-container');
const popup = document.querySelector('.popup');
const notificationContainer = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figurePart = document.querySelectorAll('.figure-part');

//Main Array for different words
// Make an request to a free API so that the user can get a different word each time, for now we use hardcoded words

//Fetching different words

// let data = async function() {
//        let request = await fetch('https://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');

//        let response = await request.json();

//        console.log(response);
//        Not working but why? Figure it out tomorow!
// };




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
      if(e.keyCode >= 65 && e.keyCode <= 90 ){
            const letter = e.key;
              if(!correctLetters.includes(letter)){
                     correctLetters.push(letter);

              //Update the DOM
              displayWords(); 
              }  else {
                     showNotification();
              } 
      } else {
             if(!wrongLetters.includes(letter)){
              wrongLetters.push(letter);  

              
             //Update the wrong letters in the DOM
             updateWrongLetters();
             } else {
                    showNotification();
             }

      }
})

// Calling the display function on page load
displayWords();


