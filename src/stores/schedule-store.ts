import { writable } from "svelte/store";

const schedule = writable(null);

fetch("/schedule/contents")
    .then(response => response.json())
    .then((scheduleData) => {

        schedule.set(scheduleFor(scheduleData));

    });

export default schedule;


export const modifyUser = (modifiedUser: User) => {

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





export const updateUserEventStatus = (user: User , event: Event , status: string) => {

    fetch("/schedule/update-user-event-status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user.id , event: event.id , status: status })
    })
        .then((response) => response.json())
        .then((userEventStatus) => {
            schedule.update((oldSchedule) => {
                let newSchedule = { ...oldSchedule };
                const eventIndex = newSchedule.events.findIndex((event) => event.id == userEventStatus.event);
                const newEvent = {...newSchedule.events[eventIndex]};
                const userStatusIndex = newEvent.userStatus.findIndex((ues) => ues.user === userEventStatus.user);
                newEvent.userStatus.splice(userStatusIndex , 1 , {user: userEventStatus.user , status: userEventStatus.status});
                newSchedule.events.splice(eventIndex , 1 , newEvent);
                return newSchedule
            }
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
        .then((scheduleData) => {
            schedule.update((oldSchedule) => { return scheduleFor(scheduleData) }
      }

};

const eventFor = (event) => {

    const dateAndTime = new Date(event.dateAndTime);
    const timeString = `${dateAndTime.getHours().toString().padStart( 2 , '0')}:${dateAndTime.getMinutes().toString().padEnd(2 , '0')}`;

    const newEvent = {
        ...event,
        dateAndTime: dateAndTime,
        year: dateAndTime.getFullYear(),
        month: dateAndTime.getMonth(),
        date: dateAndTime.getDate(),
        hours: dateAndTime.getHours(),
        minutes: dateAndTime.getMinutes() ,
        timeString: timeString
    };
    return newEvent
}
interface Schedule {
    users: User[];
    events: Event[];
    categories: Category[];
    user: User;
}

interface User {
    id: string;
    email: string;
    name: string;
    surname: string;
    phone: string;
    role: string;
    websiteRole: string;
    showInSchedule: boolean;
    categoryStatus: CategoryStatus[]
}

interface Event {
    id: string;
    status: string;
    category: string;
    dateAndTime: Date;
    description: string;
    location: string;
    nrOfUsers: number;
    userStatus: UserStatus[];
    year: number;
    month: string;
    date: number;
    hours: number;
    minutes: number;
    timeString: string
}

interface UserStatus {
    user: string;
    status: string;
}

interface CategoryStatus {
    category: string;
    status: string
}

interface Category {
    id: string;
    name: string;
    description: string;
    statusPermissions: StatusPermissions
}

interface StatusPermissions {
    event: string[];
    user: string[];
}

const scheduleFor = (scheduleData): Schedule => {

    const users: User[] = scheduleData.users;
    const events: Event[] = scheduleData.events.map((event) => { return eventFor(event) });
    const categories: Category[] = scheduleData.categories;
    const user: User = scheduleData.users.find((usr) => usr.id === scheduleData.userId);

    const schedule: Schedule = { users, events, categories , user };
    console.log(schedule);
    return schedule

}