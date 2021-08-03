import { writable } from "svelte/store";

const schedule = writable(null);

fetch("/schedule/true")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        schedule.set(data)
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



