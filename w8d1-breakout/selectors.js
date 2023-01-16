// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", description: "Stale chocolate" },
  { name: "Cookie", icon: "🍪", description: "Very soft cookie" },
  { name: "Tuna", icon: "🎣", description: "It's in a can" },
  { name: "Pasta", icon: "🍝", description: "Ready to reheat!" },
  { name: "Potato", icon: "🥔", description: "Best potato" },
];

const oldPantry = [{ name: "Potato", icon: "🥔", description: "Very old potato" }];

// getAppointmentsForDay

const bradRunA = [{ name: "Pasta", icon: "🍝", description: "Ready to reheat!" }];
const bradRunB = ["🍝"];

const kirstenRunA = [{ name: "Potato", icon: "🥔", description: "Best potato" }];
const kirstenRunB = ["🥔"];

// SQL => Normalization (Avoiding repetitions / Lower the risk of typos + changing data)

const fetchRunInfo = (run, pantry) => {
  const output = [];
  for (const icon of run) {
    output.push(pantry.find((item) => item.icon === icon));
  }
  return output;
};

// const result = fetchRunInfo(bradRunB, pantry);
const result = fetchRunInfo(kirstenRunB, oldPantry);

console.log(result);

const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 1,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const getAppointmentsForDay = (state, day) => {
  const output = [];

  // Do we need to spread? No! (because reading, not editing)
};

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 5];
