// Import stylesheets
import './style.css';

var inputText = document.querySelector('#input-text');

var reverseBtn = document.querySelector('#button-reverse');

var outputDiv = document.querySelector('#output');

function generateReverseString(inputString) {
  var reversedString = inputString.split('').reverse().join('');
  outputDiv.innerText = reversedString;
}

reverseBtn.addEventListener('click', function () {
  var inputString = inputText.value;
  generateReverseString(inputString);
});
