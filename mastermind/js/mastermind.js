function Mastermind(password) {
  this.password = password;
  this.response = [];

  if (password === undefined) {
    throw new Error("You must provide a secret password to start the game");
  }

  if (password.length !== 4) {
    throw new Error("The secret password must have 4 colors");
  }

  this.codeMasterAnswer = function () {
    return this.response;
  };

  this.getPassword = function () {
    return this.password;
  };
}

Mastermind.prototype.tryPassword = function (cracker) {
  for (let i = 0; i < cracker.length; i++) {
    color = cracker[i];
    codeColor = this.password[i];
    if (this.password.includes(color)) {
      if (color === codeColor) {
        this.response[i] = "white";
      } else {
        this.response[i] = "black";
      }
    } else {
      this.response[i] = null;
    }
  }

  return this.codeMasterAnswer();
};


// Edit this code to set a new master code password
let masterGame = new Mastermind(["green", "yellow", "blue", "red"]);

// Edit this code to try a new crack password
console.log(masterGame.tryPassword(["red", "yellow", "red", "red"]));