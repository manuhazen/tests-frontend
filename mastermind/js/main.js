let first = document.getElementById("first");
let second = document.getElementById("second");
let three = document.getElementById("three");
let four = document.getElementById("four");
let guessButton = document.getElementById("guessButton");
let tryingPassword = [];
let response = [];

// The codemaker set his code here.
let password = ["green", "yellow", "red", "green"];

function masterMind(code, cracker) {
  for (let i = 0; i < tryingPassword.length; i++) {
    color = cracker[i];
    codeColor = code[i];
    if (code.includes(color)) {
      if (color === codeColor) {
        response[i] = "white";
      } else {
        response[i] = "black";
      }
    } else {
      response[i] = null;
    }
  }

  return response;
}

guessButton.addEventListener("click", e => {
  e.preventDefault();
  tryingPassword = [
    first.options[first.selectedIndex].value,
    second.options[second.selectedIndex].value,
    three.options[three.selectedIndex].value,
    four.options[four.selectedIndex].value
  ];
  masterMind(password, tryingPassword);
  if (response.every((val, i, array) => val === array[0])) {
    alert("You cracked the code kiddo, you won.");
  } else {
    alert(`Keep trying: ${response}`);
  }
});
