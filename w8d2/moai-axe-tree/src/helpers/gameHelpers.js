export const pickOppositeChoice = (choice) => {
  // const opposites = {
  //   "🗿": "🌳",
  //   "🌳": "🪓",
  //   "🪓": "🗿",
  // };

  // return opposites[choice];
  const choices = ["🗿", "🌳", "🪓"];

  if (choices.indexOf(choice) === -1) {
    throw new Error("PICK A VALID EMOJI YOU DUM DUM");
  }

  return choices[(choices.indexOf(choice) + 1) % choices.length];
};

export const pickRandomChoice = (randomValue) => {
  const validIndex = Math.floor(randomValue) % 3;

  const choices = ["🗿", "🌳", "🪓"];

  return choices[validIndex];
  // ...
};

export const pickWinner = (computerChoice, playerChoice) => {
  const LOSE_MSG = "Git gud you n00b";
  const WIN_MSG = "Winner winner, chicken dinner";
  const DRAW_MSG = "Here's a canvas and a pen";
  // ...
  const opposites = {
    "🗿": "🌳",
    "🌳": "🪓",
    "🪓": "🗿",
  };

  if (opposites[computerChoice] === undefined || opposites[playerChoice] === undefined) {
    throw new Error("SON I AM DISAPPOINT");
  }

  if (computerChoice === playerChoice) {
    return DRAW_MSG;
  }
  if (opposites[computerChoice] === playerChoice) {
    return WIN_MSG;
  }
  if (opposites[computerChoice] !== playerChoice) {
    return LOSE_MSG;
  }
};
