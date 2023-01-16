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

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// Update the spots
// When? Booking / Canceling an appointment
// interview key in one of the appointments changed (value)

// A free spot is when interview key has a null value
// A booked spot is when interview key has an object with interviewer / student name

// To know how many spots, count the amount of nulls
// forEach with a condition
// filter

// First, we need to count how many nulls

const countFreeSpots = (state) => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const appointmentIds = currentDay.appointments;

  const freeSpots = appointmentIds.filter(
    (id) => state.appointments[id].interview === null
  ).length;

  return freeSpots;
};

// Second, update the day with the new amount of spots

const updateSpots = (state) => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const currentDayIndex = state.days.findIndex((day) => day.name === state.day);
  const updatedDay = { ...currentDay };
  updatedDay.spots = countFreeSpots(state);

  const updatedDays = [...state.days];
  updatedDays[currentDayIndex] = updatedDay;

  const updatedState = { ...state, days: updatedDays };

  return updatedState;
};


const bookInterview = (id, interview) => {
  const newAppointment = {...state.appointments[id]}
  newAppointment.interview = interview
  const updatedAppointments = {...state.appointments, [id]: newAppointment}

  const updatedState = {...state, appointments:updatedAppointments}

  const updatedUpdatedState = updateSpots(updatedState)
  
  setState(updatedUpdatedState)

}



useEffect(() => {
  axios.get("/api/appointments").then(res => setState(prev => {...prev, appointments:res.data}))
  axios.get("/api/days").then(res => setState(prev => {...prev, days:res.data}))
  axios.get("/api/interviewers").then(res => setState(prev => {...prev, interviewers:res.data}))
})


useEffect(() => {
  const calls = [
    axios.get("/api/appointments"),
    axios.get("/api/days"),
    axios.get("/api/interviewers"),
  ]

  Promise.all(calls).then(([appt, days, inter]) => {
    const newState = {appointments:appt.data, days:days.data, interviewers:inter.data, day:"Monday"}

    setState(newState)
  })
})


// days[0].appointments.forEach((appointmentId) =>
//   appointments[appointmentId] === null ? 1 : 0
// );

// days[0].appointments.filter((appointmentId) => !appointments[appointmentId].interview);

// getAppointmentsForDay().filter((appointment) => !appointment.interview).length;

// const result1 = [
//   {
//     id: 1,
//     time: "12pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: 1,
//     },
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: null,
//   },
// ]

// const result2 = [
//   {
//     id: 2,
//     time: "1pm",
//     interview: null,
//   }
// ]

// .length

// 1

// const bob = [null, null, 1, 3, 5];

// console.log(bob.filter((element) => !element).length);
