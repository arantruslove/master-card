// First JavaScript File!
// Importing modules
import { get_rand_int, target, compare } from "./test_file.js";

// Prime number test function
function isPrime(num) {
    // 1 is not a prime number
    if (num <= 1) {
      return false;
    }
    
    // 2 and 3 are prime numbers
    if (num === 2 || num === 3) {
      return true;
    }
  
    // Check if the number is divisible by any number from 2 to its square root
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    // If the loop completes without finding a divisor, the number is prime
    return true;
  }

// End of prime number test function

// Execute code if the button in page 3 is pressed:

let target_cards;
let num_deals = 0;
const waterBottle = document.getElementById("deal");
waterBottle.addEventListener("click",function(){
    num_deals += 1;
    target_cards = target();
    document.getElementById("numberDeals").innerHTML = num_deals;
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

});











