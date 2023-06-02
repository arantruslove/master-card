// First JavaScript File!
// Importing modules
import { get_rand_int, target, compare } from "./test_file.js";

// Function that enters the value of the button that has been pressed into
// one of the inputs.
function val_inputter(buttonID){
  const button = document.getElementById(buttonID);
  for (let i = 1; i < 5; i++){
    const input = document.getElementById(`input${i}`);
    let value = input.value;
    if (value.trim() == "") {
    input.value = button.value;
    return null;
  }
}
}

// Function that clears all the inputs.

function inputs_clear(){
  input1.value = '';
  input2.value = '';
  input3.value = '';
  input4.value = '';
}

// Execute code if the button in page 3 is pressed:
let target_cards;
let num_deals = 0;
const waterBottle = document.getElementById("deal");
waterBottle.addEventListener("click",function(){
    num_deals += 1;
    target_cards = target();
    document.getElementById("numberDeals").innerHTML = num_deals;
    waterBottle.style.backgroundColor = 'grey';
});

// Function that compares the input cards to the target cards.

const iceCream = document.getElementById("myCards");
iceCream.addEventListener("click",function(){
    let input1 = document.querySelector('#input1').value;
    let input2 = document.querySelector('#input2').value;
    let input3 = document.querySelector('#input3').value;
    let input4 = document.querySelector('#input4').value;
    let card_store = [input1,input2,input3,input4];
    let test_result = compare(card_store,target_cards);
    document.getElementById("numberCorrect").innerHTML = test_result;
    inputs_clear();
});

// Button interactivity

// const button2 = document.getElementById('button2');
// button2.addEventListener("click",function(){
//   val_inputter('button2');
// })

// const button3 = document.getElementById('button3');
// button3.addEventListener("click", function() {
//   val_inputter('button3');
// });

for (let k = 2; k <= 10; k++) {
  const button = document.getElementById(`button${k}`);
  button.addEventListener("click", function() {
    val_inputter(`button${k}`);
  });
}

const specialValues = ['J', 'K', 'Q', 'A'];

for (let i = 0; i < specialValues.length; i++) {
  const value = specialValues[i];

  const button = document.getElementById(`button${value}`);
  button.addEventListener("click", function() {
    val_inputter(`button${value}`);
  });
}














