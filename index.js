import getFacts from './fetch requests/random facts.js';
import { wordFlick } from "./fact typing.js";

const factDisplay = document.querySelector('#fact');
const cardDisplay = document.querySelector('.card .innerCard');
const TheCard = document.querySelector('.card');
const cardFront = document.querySelector('.card .front');
const cardBack1 = document.querySelector('.card .back1');
const cardBack2 = document.querySelector('.card .back2');
const cardBack3 = document.querySelector('.card .back3');
const cardBack4 = document.querySelector('.card .back4');
const cardBack5 = document.querySelector('.card .back5');
const cardFrontImage = document.querySelector('.card .front img');
const nameDisplay = document.querySelector('.welcomeText span');
const title = document.querySelector('#title');
const welcomeText = document.querySelector('.welcomeText');
const rickRoll = document.querySelector('#rickRoll a');

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*/-+=_~<>?|;:{}[]()";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
const numbers = "1234567890";
const symbols = "!@#$%^&*/-+=_~<>?|;:{}[]()";

const cards = {
  parentDirectory: './images/cards/',

  spades: ['AS.png', '2S.png', '3S.png', '4S.png', '5S.png',
    '6S.png', '7S.png', '8S.png', '9S.png', '10S.png',
    'JS.png', 'QS.png', 'KS.png'],

  hearts: ['AH.png', '2H.png', '3H.png', '4H.png', '5H.png',
    '6H.png', '7H.png', '8H.png', '9H.png', '10H.png',
    'JH.png', 'QH.png', 'KH.png'],

  diamonds: ['AD.png', '2D.png', '3D.png', '4D.png', '5D.png',
    '6D.png', '7D.png', '8D.png', '9D.png', '10D.png',
    'JD.png', 'QD.png', 'KD.png'],

  clubs: ['AC.png', '2C.png', '3C.png', '4C.png', '5C.png',
    '6C.png', '7C.png', '8C.png', '9C.png', '10C.png',
    'JC.png', 'QC.png', 'KC.png'],

  toDirectory() {
    const spades = this.spades.map(card => card = this.parentDirectory + card);
    const hearts = this.hearts.map(card => card = this.parentDirectory + card);
    const clubs = this.clubs.map(card => card = this.parentDirectory + card);
    const diamonds = this.diamonds.map(card => card = this.parentDirectory + card);

    return {
      spades,
      hearts,
      clubs,
      diamonds
    };
  }
};
// console.log(cards.toDirectory());

rickRoll.addEventListener('click', () => {
  sessionStorage.setItem('rickRolled', 'true');
});

async function getFactAndFlickWords() {
  const facts = await getFacts();
  console.log(facts);
  // factDisplay.textContent = fact;

  wordFlick(facts);
}

getFactAndFlickWords();

nameDisplay.textContent = sessionStorage.getItem('name');
rickRoll.textContent = sessionStorage.getItem('rickRolled') === 'true' ? "I'm sorry" : rickRoll.textContent;

switch (sessionStorage.getItem('index')) {
  // case '1':
  //   cardFrontImage.setAttribute('src', cards.toDirectory().diamonds[3]);
  //   cardFrontImage.setAttribute('alt', '4 of diamonds');
  //   break;
  // case '2':
  //   cardFrontImage.setAttribute('src', cards.toDirectory().spades[2]);
  //   cardFrontImage.setAttribute('alt', '3 of spades');
  //   break;
  // case '3':
  //   cardFrontImage.setAttribute('src', cards.toDirectory().hearts[9]);
  //   cardFrontImage.setAttribute('alt', '10 of hearts');
  //   break;
  // case '4':
  //   cardFrontImage.setAttribute('src', cards.toDirectory().clubs[12]);
  //   cardFrontImage.setAttribute('alt', 'king of clubs');
  //   break;
  // case '5':
  //   cardFrontImage.setAttribute('src', cards.toDirectory().clubs[5]);
  //   cardFrontImage.setAttribute('alt', '6 of clubs');
  //   break;

  case '=':
    let password = undefined;
    console.log(sessionStorage.getItem('password'));
    if (sessionStorage.getItem('password') !== password) {
      password = window.prompt("please enter the password");
      if (password === null) {
        window.location.href = './login/index.html';
        break;
      };
      window.alert("Entered Development mode");
      sessionStorage.setItem('password', password);
      window.alert(`what made you think that I would have my password as "${sessionStorage.getItem('password')}"?`);
      window.alert(`by the way, "Developer mode" does nothing`);
    };
    cardFrontImage.setAttribute('src', './images/cards/dis/blue_back.png');
    cardFrontImage.setAttribute('alt', 'blue back');
    break;
};

cardDisplay.addEventListener('click', () => {

  const transform = cardDisplay.style.transform;
  unSpreadCards();
  setTimeout(() => {
    cardDisplay.style.transform = transform === '' ? `rotateY(180deg)` : '';
    cardDisplay.style.animation = transform === '' ? 'flip 2s ease-in' : 'flipBack 2s ease-in';
  }, 500);

});

cardDisplay.addEventListener('mouseover', spreadCards);
cardDisplay.addEventListener('mouseout', unSpreadCards);

const titleText = title.textContent;
title.addEventListener('mouseover', changeTitle);
nameDisplay.addEventListener('mouseover', changeUserName);
document.addEventListener('DOMContentLoaded', () => { changeTitle(); changeUserName(); });

const welcomeText_Text = welcomeText.textContent;
function changeTitle() {
  let iterations = -5;
  let time = 75;
  const forthIntervalID = setInterval(changeText, time);

  function changeText() {
    title.textContent = title.textContent.split("").map((letter, index) => {
      if (index < iterations) {
        return titleText[index];
      }
      else {
        return letters[Math.floor(Math.random() * letters.length)];
        return symbols[Math.floor(Math.random() * symbols.length)];
        return numbers[Math.floor(Math.random() * numbers.length)];
        return allLetters[Math.floor(Math.random() * allLetters.length)];
      }
    }).join("");

    if (iterations > titleText.length) {
      clearInterval(forthIntervalID);
      title.textContent = titleText;
    };

    iterations++;
  };
}

function changeWelcomeText() {
  let iterations = -5;
  let time = 50;
  const forthIntervalID = setInterval(changeText, time);

  function changeText() {
    welcomeText.textContent = welcomeText.textContent.split("").map((letter, index) => {
      if (index < iterations) {
        return welcomeText_Text[index];
      }
      else {
        return numbers[Math.floor(Math.random() * numbers.length)];
      }
    }).join("");

    if (iterations > welcomeText_Text.length) {
      clearInterval(forthIntervalID);
      welcomeText.textContent = welcomeText_Text;
    };

    iterations++;
  };
}

function changeUserName() {
  let iterations = -5;
  let time = 50;
  const forthIntervalID = setInterval(changeText, time);
  let length = symbols.length;

  function changeText() {
    nameDisplay.textContent = nameDisplay.textContent.split("").map((letter, index) => {
      if (index < iterations) {
        return sessionStorage.getItem('name')[index];
      }
      else {
        // return symbols[symbols.length - length];
        // return letters[Math.floor(Math.random() * letters.length)];
        // return symbols[Math.floor(Math.random() * symbols.length)];
        // return numbers[Math.floor(Math.random() * numbers.length)];
        return allLetters[Math.floor(Math.random() * allLetters.length)];
      }
    }).join("");

    if (iterations > sessionStorage.getItem('name').length) {
      clearInterval(forthIntervalID);
      nameDisplay.textContent = sessionStorage.getItem('name');
    };

    iterations++;
    length--;
  };
}

function spreadCards() {

  cardBack1.style.transform = `rotateZ(-20deg)`;
  cardBack2.style.transform = `rotateZ(-15deg)`;
  cardBack3.style.transform = `rotateZ(-10deg)`;
  cardBack4.style.transform = `rotateZ(-5deg)`;

}

function unSpreadCards() {

  cardBack1.style.transform = `rotateZ(0deg)`;
  cardBack2.style.transform = `rotateZ(0deg)`;
  cardBack3.style.transform = `rotateZ(0deg)`;
  cardBack4.style.transform = `rotateZ(0deg)`;

}

// TheCard.addEventListener('dblclick', () => {
//   cardDisplay.style.display = "none";
// });
