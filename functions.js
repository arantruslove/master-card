export function isPrime(num) {
    // 1 is not a prime number
    if (num === 1) {
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

  export function greeting(){
    return "Hello World!"
  }