// Function that finds the prime factors of any number.

export function add_set(array,value){
  if(array.includes(value)){
    // Do nothing
  }
  else{
    array.push(value);
  }
}

export function prime_factors(value){
    let divider = 2;
    let store = [];
  do{
    let test = value/divider;

    if(Number.isInteger(test)){
      value = value/divider;
      add_set(store,divider);
    }
    else{
      divider = divider + 1;
    }


  } while(divider < value);

  add_set(store,value);

  return store
}
