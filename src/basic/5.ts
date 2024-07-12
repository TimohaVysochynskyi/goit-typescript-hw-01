enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string): boolean => {
  if (day !== (DayOfWeek[DayOfWeek.Saturday] || DayOfWeek[DayOfWeek.Sunday])) {
    return false;
  } else {
    return true;
  }
};
