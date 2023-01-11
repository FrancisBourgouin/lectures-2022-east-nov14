export const calculateDayDifference = (lastWatered) => {
  const todayDate = new Date();
  const lastWateredDate = new Date(lastWatered);

  const msDifference = todayDate.getTime() - lastWateredDate.getTime();
  const sDifference = msDifference / 1000;
  const dayDifference = sDifference / 86400;

  return dayDifference;
};
