// What could go right
const chai = require("chai");
const expect = chai.expect;
const drinkBeverage = require("../drinkBeverage");

describe("What could go right", () => {
  // - Proper input goes in, proper output goes out (Sanity check)
  it("should return a modified object if there was a proper mug and sipSize", () => {
    const validMug = {
      capacityInMl: 500,
      currentVolume: 300,
      typeOfBeverage: "Coffee",
    };
    const validSip = 100;
    const expectedMug = {
      capacityInMl: 500,
      currentVolume: 200,
      typeOfBeverage: "Coffee",
    };

    const result = drinkBeverage(validMug, validSip);
    // assert.equals(expectedMug, result)
    expect(result).to.deep.equal(expectedMug);
  });

  // - Mug object goes in, new object comes out (mutation / immutability)
  xit("should return a modified object that didn't change the original (stretch)", () => {
    // ...
  });
});

// What could go wrong
describe("What could go wrong with the inputs", () => {
  it("should return a modified mug with vol at 0 if the sip is bigger than remaining volume", () => {
    // - Sip too big (negative volume at the end)
    const validMug = {
      capacityInMl: 500,
      currentVolume: 300,
      typeOfBeverage: "Coffee",
    };
    const tooBigSip = 500;
    const expectedMug = {
      capacityInMl: 500,
      currentVolume: 0,
      typeOfBeverage: "Coffee",
    };

    const result = drinkBeverage(validMug, tooBigSip);

    expect(result).to.be.an("object");
    expect(result).to.deep.equal(expectedMug);
    expect(result.currentVolume).to.equal(0);
  });
  it("should throw an error if the mug has a negative / 0 value in currentVol", () => {
    // - Invalid mug (negative volume from the start)
    // - Mug is empty
    const invalidMug = {
      capacityInMl: 500,
      currentVolume: 0,
      typeOfBeverage: "Coffee",
    };
    const tooBigSip = 500;
    const expectedErrorMessage = "WHY YOU TRY DRINKING FROM AN EMPTY MUG YOU DUM DUM";

    // const result = drinkBeverage(invalidMug, tooBigSip);

    // expect(result).to.equal(expectedErrorMessage); // Bad!

    expect(() => drinkBeverage(invalidMug, tooBigSip)).to.throw(expectedErrorMessage);
  });
  it("should throw an error if the mug is invalid", () => {
    // - Invalid mug / no mug
    const expectedErrorMessage = "WHATS IN THE MUG";

    expect(() => drinkBeverage(undefined, 0)).to.throw(expectedErrorMessage);
  });
  it("should throw an error if we try to backwash (negative sip)", () => {
    // - Negative sip (no backwash)
    const validMug = {
      capacityInMl: 500,
      currentVolume: 300,
      typeOfBeverage: "Coffee",
    };
    const yuckySip = -100;
    const expectedErrorMessage = "EWWW. JUST EWWW.";

    expect(() => drinkBeverage(validMug, yuckySip)).to.throw(expectedErrorMessage);
  });
  it("should throw an error if the sip is invalid", () => {
    const validMug = {
      capacityInMl: 500,
      currentVolume: 300,
      typeOfBeverage: "Coffee",
    };
    const invalidSip = "A BIG ONE";
    const expectedErrorMessage = "Sip must be a number";

    expect(() => drinkBeverage(validMug, invalidSip)).to.throw(expectedErrorMessage);
  });
});
