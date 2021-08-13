import { groupBy } from "./extensions";

export const scheduleYears = (users, events) => {
  const years = [];

  const perYear = groupBy(events, "year");
  const yearIndexes = Object.keys(perYear);

  yearIndexes.forEach((yearIndex) => {
    addYear(yearIndex, perYear[yearIndex], years);
  });

  const reverseYears = years.reverse();
  const scheduleUsers = users.filter((user) => {
    return user.showInSchedule;
  });

  return { users: scheduleUsers, years: reverseYears };
};

const addYear = (yearIndex, events, years) => {
  const months = [];
  const days = [];
  const sortedEvents = events.sort((a, b) => {
    return a.dateAndTime - b.dateAndTime;
  });
  const year = {
    name: yearIndex,
    children: months,
    days,
    events: sortedEvents,
  };
  years.push(year);
  const perMonth = groupBy(events, "month");
  const indexes = Object.keys(perMonth);

  indexes.forEach((index) => {
    addMonth(index, perMonth[index], months, days);
  });
};

const addMonth = (monthIndex, eventCollection, months, allDays) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mrt",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];
  const name = monthNames[monthIndex];
  const days = [];
  const numberOfColumns = eventCollection.length;
  const month = { name: name, children: days, numberOfColumns };
  months.push(month);

  const perDay = groupBy(eventCollection, "date");
  const indexes = Object.keys(perDay);

  indexes.forEach((index) => {
    addDay(index, perDay[index], days);
  });
  days.forEach((day) => {
    allDays.push(day);
  });
};

const addDay = (dayIndex, eventCollection, days) => {
  const numberOfColumns = eventCollection.length;
  const day = { name: dayIndex, children: eventCollection, numberOfColumns };
  days.push(day);
};
