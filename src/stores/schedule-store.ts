import { writable } from "svelte/store";

const schedule = writable(null);

fetch("/schedule/contents")
    .then(response => response.json())
    .then((scheduleData) => {

        schedule.set(scheduleFor(scheduleData));

    });

export default schedule;


export const modifyUser = (modifiedUser) => {

    fetch("/schedule/user/modify", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: modifiedUser.id, name: modifiedUser.name + "1" })
    })
        .then((response) => response.json())
        .then((newUser) => {
            schedule.update((oldSchedule) => {
                let newSchedule = { ...oldSchedule };
                const index = newSchedule.users.findIndex((oldUser) => oldUser.id == newUser.id);
                const oldUser = newSchedule.users[index];
                newSchedule.users.splice(index, 1, newUser);
                return newSchedule;
            })
        });
};

export const login = (email, password) => {

    let url = "/schedule/login";

    let headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(email + ":" + password));

    fetch(url, { method: "GET", headers: headers })
        .then((response) => response.json())
        .then((scheduleData) => {
            schedule.update((oldSchedule) => { return scheduleFor(scheduleData) }
      }

};


export const logout = () => {

    let url = "/schedule/logout";

    fetch(url)
        .then((response) => response.json())
        .then((newSchedule) => {
            schedule.update((oldSchedule) => { return newSchedule }
      }

};

const eventFor = (event) => {

    const dateAndTime = new Date(event.dateAndTime);

    const newEvent = {
        ...event,
        dateAndTime: dateAndTime,
        year: dateAndTime.getFullYear(),
        month: dateAndTime.getMonth(),
        date: dateAndTime.getDate(),
        hours: dateAndTime.getHours(),
        minutes: dateAndTime.getMinutes()
    };
    return newEvent
}

const scheduleFor = (scheduleData) => {

    const events = scheduleData.events.map((event) => { return eventFor(event) });

    return { ...scheduleData, events };

}