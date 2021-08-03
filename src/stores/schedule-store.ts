import { writable } from "svelte/store";

const schedule = writable(null);

fetch("/schedule/true")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        schedule.set(data)
    });


export const modifyUser = (user) => {
    console.log("modifyUser from schedule-store");
    console.log(user);
    fetch("/schedule/user/modify", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id, name: user.name + "1" }),
    })
        .then((response) => response.json())
        .then((modifiedUser) => {


            schedule.update((oldSchedule) => {

                let newSchedule = { ...oldSchedule };


                const userIndex = newSchedule.users.findIndex((u) => u.id == modifiedUser.id);
                const oldUser = newSchedule.users[userIndex];
                newSchedule.users.splice(userIndex, 1, modifiedUser);
                console.log(userIndex);
                console.log(newSchedule);
                return newSchedule;



            })





        });
};


export default schedule;
