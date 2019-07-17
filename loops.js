function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
<<<<<<< HEAD
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`);
=======
      console.log("I am 1 strange loop.")
    } else {
      console.log("I am ${i} time");
>>>>>>> f1deb55d773cd21b9300c7638c75bdec0b6014f6
    }
  }
  return array
}

function whileLoop(n){
  while (n > 0){
    console.log(--n)
  }
  return ('done')
}

function doWhileLoop(i){
  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < 10)
}