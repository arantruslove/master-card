// First JavaScript File!
// Importing modules
// import { isPrime, greeting } from "./functions";

// Prime number test function

export function isPrime(num) {
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

// Exectute code if the button in page 3 is pressed:

const waterBottle = document.getElementById("myButton");

waterBottle.addEventListener("click",function(e){
    let userInput = document.querySelector('#userInput');
    
    let val = userInput.value

    console.log(val)

    let test = isPrime(val);

    console.log(test)

    if(test){
        document.getElementById("output").innerHTML = "Prime";
    }
    
    else{
        document.getElementById("output").innerHTML = "Not prime";
    }
});




