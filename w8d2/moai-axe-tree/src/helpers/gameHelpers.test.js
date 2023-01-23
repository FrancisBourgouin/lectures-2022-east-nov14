import { pickOppositeChoice, pickRandomChoice, pickWinner } from "./gameHelpers";

describe("pickOppositeChoice function", () => {
  it("should return the opposite choice", () => {
    // 🗿-🪓-🌳

    const pair1 = ["🗿", "🌳"];
    const pair2 = ["🌳", "🪓"];
    const pair3 = ["🪓", "🗿"];

    const pairs = [pair1, pair2, pair3];

    for (const pair of pairs) {
      const result = pickOppositeChoice(pair[0]);
      const expectedResult = pair[1];

      expect(result).toBe(expectedResult);
    }
  });
  it("should throw an error if not one of the required emojis", () => {
    const result = () => pickOppositeChoice();
    const expectedResult = "PICK A VALID EMOJI YOU DUM DUM";

    expect(result).toThrow(expectedResult);
  });
});
describe("pickRandomChoice function", () => {
  it("should return a valid random emoji", () => {
    const result = pickRandomChoice(13013031);
    const expectedResult = "🗿";

    expect(result).toBe(expectedResult);
  });
});
describe("pickWinner function", () => {
  it("should return computer wins if computer has the winning emoji", () => {
    const pair1 = ["🗿", "🌳"];
    const pair2 = ["🌳", "🪓"];
    const pair3 = ["🪓", "🗿"];

    const pairs = [pair1, pair2, pair3];

    for (const pair of pairs) {
      const result = pickWinner(pair[1], pair[0]);
      const expectedResult = "Git gud you n00b";

      expect(result).toBe(expectedResult);
    }
  });
  it("should return player wins if player has the winning emoji", () => {
    const pair1 = ["🗿", "🌳"];
    const pair2 = ["🌳", "🪓"];
    const pair3 = ["🪓", "🗿"];

    const pairs = [pair1, pair2, pair3];

    for (const pair of pairs) {
      const result = pickWinner(pair[0], pair[1]);
      const expectedResult = "Winner winner, chicken dinner";

      expect(result).toBe(expectedResult);
    }
  });
  it("should return draw if player and computer has the same emoji", () => {
    const choices = ["🗿", "🌳", "🪓"];

    for (const choice of choices) {
      const result = pickWinner(choice, choice);
      const expectedResult = "Here's a canvas and a pen";

      expect(result).toBe(expectedResult);
    }
  });
  it("throw an error if not valid emojis or missing a parameter", () => {
    const result = () => pickWinner();
    const expectedResult = "SON I AM DISAPPOINT";

    expect(result).toThrow(expectedResult);
  });
});
