import { writable } from "svelte/store";

const schedule = writable(null);

fetch("/schedule/true")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        schedule.set(data)
    });

export default schedule;
