import { groupBy } from "../../extensions";


export const scheduleYears = (users, events) => {

    const years = [];

    const perYear = groupBy(events, "year");
    const yearIndexes = Object.keys(perYear);
    const currentYearIndex = yearIndexes[yearIndexes.length - 1];
    yearIndexes.forEach(
        (yearIndex) => {

            addYear(yearIndex, perYear[yearIndex], years)
        }
    );
    return { users, years, currentYearIndex }

};

const addYear = (yearIndex, eventCollection, years) => {

    const months = [];
    const year = { name: yearIndex, children: months };
    years.push(year);
    const perMonth = groupBy(eventCollection, "month");
    const indexes = Object.keys(perMonth);

    indexes.forEach(
        (index) => {

            addMonth(index, perMonth[index], months)
        }
    );

};

const addMonth = (monthIndex, eventCollection, months) => {

    const monthNames = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    const name = monthNames[monthIndex];
    const days = [];
    const month = { name: name, children: days };
    months.push(month);


    const perDay = groupBy(eventCollection, "date");
    const indexes = Object.keys(perDay);

    indexes.forEach(
        (index) => {

            addDay(index, perDay[index], days)
        }
    );


};

const addDay = (dayIndex, eventCollection, days) => {

    const day = { name: dayIndex, children: eventCollection };
    days.push(day);

}