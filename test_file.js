/**Modules */
import { deepCopy } from "./misc_functions.js";

/**Constants */
const Cards = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

/**Functions */

// Random integer generator between two bounds (inclusive).
export function get_rand_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Deals four random cards from the pack of 52 cards.
export function target(target_diff=true){
    
        let set_cards = deepCopy(Cards);
        let target = [];
        for (let i = 0; i < 4; i++){
            let rand_position = get_rand_int(0,set_cards.length-1);
            let val = set_cards[rand_position];
            if (target_diff===true){
                set_cards.splice(rand_position,1);
                }
            target.push(val);
        }
        return target;
}

// Compares inputted string of cards with the target cards.
export function compare(string, target) {
    let k = 0;
    let targetCopy = deepCopy(target);
  
    for (let i = 0; i < string.length; i++) {
      if (targetCopy.includes(string[i])) {
        k++;
        targetCopy.splice(targetCopy.indexOf(string[i]), 1);
      }
    }
    
    let output;
    if (k === 2) {
       output = `${k} correct, reverse direction`;
      
    }
    else{
        output = `${k} correct`;
    }
  
    return output;
  }
