import { writable } from "svelte/store";

const schedule = writable(null);

fetch("/schedule/contents")
  .then((response) => response.json())
  .then((scheduleData) => {
    schedule.set(scheduleFor(scheduleData));
  });

export default schedule;

export const modifyUser = (
  id,
  name,
  surname,
  email,
  phone,
  role,
  websiteRole,
  categoryIdStatus
) => {
  fetch("/schedule/user/modify", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
      surname,
      email,
      phone,
      role,
      websiteRole,
      categoryIdStatus,
    }),
  })
    .then((response) => response.json())
    .then((newUser) => {
      schedule.update((oldSchedule) => {
        let newSchedule = { ...oldSchedule };
        const index = newSchedule.users.findIndex(
          (oldUser) => oldUser.id == newUser.id
        );
        newSchedule.users.splice(index, 1, newUser);
        return newSchedule;
      });
    });
};

export const modifyCategory = (id, name, description) => {
  fetch("/schedule/category/modify", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, description }),
  })
    .then((response) => response.json())
    .then((newCat) => {
      schedule.update((oldSchedule) => {
        let newSchedule = { ...oldSchedule };
        const index = newSchedule.categories.findIndex(
          (oldCat) => oldCat.id == newCat.id
        );
        newSchedule.categories.splice(index, 1, newCat);
        return newSchedule;
      });
    });
};

export const modifyEvent = (
  id,
  dateString,
  timeString,
  description,
  location,
  nrOfUsers,
  status
) => {
  fetch("/schedule/event/modify", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      dateString,
      timeString,
      description,
      location,
      nrOfUsers,
      status,
    }),
  })
    .then((response) => response.json())
    .then((newEvent) => {
      schedule.update((oldSchedule) => {
        let newSchedule = { ...oldSchedule };
        const index = newSchedule.events.findIndex(
          (oldEvent) => oldEvent.id == newEvent.id
        );
        let event = eventFor(newEvent);
        newSchedule.events.splice(index, 1, event);
        return newSchedule;
      });
    });
};

export const addCategory = (name: string, description: string) => {
  fetch("/schedule/category/add", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description }),
  })
    .then((response) => response.json())
    .then((newCategory) => {
      schedule.update((oldSchedule) => {
        let newSchedule = { ...oldSchedule };
        newSchedule.categories.push(newCategory);
        return newSchedule;
      });
    });
};

export const addEvent = (
  dateString,
  timeString,
  category,
  description,
  location,
  nrOfUsers,
  status
) => {
  fetch("/schedule/event/add", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dateString,
      timeString,
      category,
      description,
      location,
      nrOfUsers,
      status,
    }),
  })
    .then((response) => response.json())
    .then((newEvent) => {
      schedule.update((oldSchedule) => {
        let newSchedule = { ...oldSchedule };
        let event = eventFor(newEvent);
        console.log(event);
        newSchedule.events.push(event);
        return newSchedule;
      });
    });
};

export const addUser = (user) => {
  fetch("/schedule/user/add", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((newUser) => {
      schedule.update((oldSchedule) => {
        let newSchedule = { ...oldSchedule };
        newSchedule.users.push(newUser);
        return newSchedule;
      });
    });
};

export const updateUserEventStatus = (
  user: User,
  event: Event,
  status: string
) => {
  fetch("/schedule/update-user-event-status", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: user.id, event: event.id, status: status }),
  })
    .then((response) => response.json())
    .then((userEventStatus) => {
      schedule.update((oldSchedule) => {
        let newSchedule = { ...oldSchedule };
        const eventIndex = newSchedule.events.findIndex(
          (event) => event.id == userEventStatus.event
        );
        const newEvent = { ...newSchedule.events[eventIndex] };
        const userStatusIndex = newEvent.userStatus.findIndex(
          (ues) => ues.user === userEventStatus.user
        );
        newEvent.userStatus.splice(userStatusIndex, 1, {
          user: userEventStatus.user,
          status: userEventStatus.status,
        });
        newSchedule.events.splice(eventIndex, 1, newEvent);
        return newSchedule;
      });
    });
};

export const login = (email, password) => {
  let url = "/schedule/login";

  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(email + ":" + password));

  fetch(url, { method: "GET", headers: headers })
    .then((response) => response.json())
    .then((scheduleData) => {
      schedule.update((oldSchedule) => {
        return scheduleFor(scheduleData);
      });
    });
};

export const logout = () => {
  let url = "/schedule/logout";

  fetch(url)
    .then((response) => response.json())
    .then((scheduleData) => {
      schedule.update((oldSchedule) => {
        return scheduleFor(scheduleData);
      });
    });
};

const eventFor = (event) => {
  const dateAndTime = new Date(event.dateAndTime);

  const timeString = `${dateAndTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${dateAndTime.getMinutes().toString().padEnd(2, "0")}`;

  const newEvent = {
    ...event,
    dateAndTime: dateAndTime,
    year: dateAndTime.getFullYear(),
    month: dateAndTime.getMonth(),
    date: dateAndTime.getDate(),
    hours: dateAndTime.getHours(),
    minutes: dateAndTime.getMinutes(),
    dateString: dateAndTime.toDateString(),
    timeString: timeString,
  };
  return newEvent;
};
interface Schedule {
  users: User[];
  events: Event[];
  categories: Category[];
  user: User;
  loggedIn: boolean;
  isAdmin: boolean;
}

interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  role: string;
  websiteRole: string;
  categoryStatus: CategoryStatus[];
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
  timeString: string;
}

export interface UserStatus {
  user: string;
  status: string;
}

interface CategoryStatus {
  category: string;
  status: string;
}

export type UUID = string;

export type CategoryId = UUID;

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  statusPermissions: StatusPermissions;
}

export interface StatusPermissions {
  event: string[];
  user: string[];
}

const scheduleFor = (scheduleData): Schedule => {
  const users: User[] = scheduleData.users;
  const events: Event[] = scheduleData.events
    .map((event) => {
      return eventFor(event);
    })
    .sort((a, b) => {
      return a.dateAndTime - b.dateAndTime;
    });
  const categories: Category[] = scheduleData.categories;
  const user: User = scheduleData.users.find(
    (usr) => usr.id === scheduleData.userId
  );

  const loggedIn: boolean = scheduleData.loggedIn;
  const isAdmin: boolean = scheduleData.isAdmin;

  const schedule: Schedule = {
    users,
    events,
    categories,
    user,
    loggedIn,
    isAdmin,
  };
  console.log(schedule);
  return schedule;
};
