let letters = document.getElementById("buchstabe");
let zahl = document.getElementById("zahl");
let button = document.getElementById("umwandeln");
let ausgabe = document.getElementById("ausgabe");
//console.log(ausgabe);

//let word = document.getElementById("buchstabe");
function shiftWord(word, nr) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    newWord += shiftLetter(word[i], nr);
  }
  return newWord;
}

function shiftLetter(letter, num) {
  let numberLetter = letter.charCodeAt();
  let shiftNumb = numberLetter + +num;
  if (numberLetter >= 65 && numberLetter <= 90) {
    if (shiftNumb > 90) {
      shiftNumb = shiftNumb - 90 + 64;
    }
    if (shiftNumb < 65) {
      shiftNumb = shiftNumb - 65 + 91;
    }
  }
  if (numberLetter >= 97 && numberLetter <= 122) {
    if (shiftNumb > 122) {
      shiftNumb = shiftNumb - 122 + 96;
    }
    if (shiftNumb < 97) {
      shiftNumb = shiftNumb - 97 + 123;
    }
  }

  let newLetter = String.fromCharCode(shiftNumb);
  return newLetter;
}

const ergebnis = () => {
  let word = letters.value;
  let nr = zahl.value;
  let ergebnis = shiftWord(word, nr);
  //console.log(ergebnis);
  ausgabe.textContent = ergebnis;
};
button.addEventListener("click", ergebnis);
