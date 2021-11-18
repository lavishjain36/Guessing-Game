//Generate a random Number
let y = Math.floor(Math.random() * 10 + 1);
console.log(y);

let guessCount = 1;

document.getElementById("submitguess").onclick = function () {
  let x = document.getElementById("GuessField").value;
  // console.log(x);

  if (x == y) {
    alert("COngratulations.You have Guessed Exact Number " + guessCount);
  } else if (x > y) {
    alert("Sorry.Try a Smaller Number");
    guessCount++;
  } else {
    alert("Sorry.Try a Bigger Number");
    guessCount++;
  }
};
