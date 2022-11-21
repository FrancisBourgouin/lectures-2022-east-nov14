const drinkBeverage = (mug, sipSize) => {
  if (typeof mug !== "object" || !mug.hasOwnProperty("currentVolume")) {
    throw new Error("WHATS IN THE MUG");
  }

  if (mug.currentVolume <= 0) {
    throw new Error("WHY YOU TRY DRINKING FROM AN EMPTY MUG YOU DUM DUM");
  }
  if (typeof sipSize !== "number") {
    throw new Error("Sip must be a number");
  }

  if (sipSize < 0) {
    throw new Error("EWWW. JUST EWWW.");
  }

  // - modify the currentVolume key by removing the sipSize ( -= )
  // - return the object

  mug.currentVolume = Math.max(0, mug.currentVolume - sipSize);
  // mug.currentVolume -= sipSize;

  // if (mug.currentVolume < 0) {
  //   mug.currentVolume = 0;
  // }

  return mug;
};

module.exports = drinkBeverage;
