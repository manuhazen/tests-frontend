describe("Testing the game, mastermind should work.", () => {
  it("should accept the master code password and return it", () => {
    let newGame = new Mastermind(["green", "red", "yellow", "blue"]);
    expect(newGame.getPassword()).toBeInstanceOf(Array);
  });

  it("should throw error if I not provide the initial password", () => {
    expect(() => {
      new Mastermind();
    }).toThrow(
      new Error("You must provide a secret password to start the game")
    );
  });

  it("should throw error if the crack code it's not the correct length", () => {
    expect(() => {
      new Mastermind(["green", "red"]);
    }).toThrow(new Error("The secret password must have 4 colors"));
  });

  it("should give me the array with the hints pegs", () => {
    let newGame = new Mastermind(["green", "red", "yellow", "red"]);
    expect(
      newGame.tryPassword(["red", "green", "yellow", "green"])
    ).toBeInstanceOf(Array);
  });
});
