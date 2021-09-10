import loginIcon from "@iconify-icons/bx/bx-log-in-circle";
import welcomeIcon from "@iconify-icons/bx/bx-calendar-check";
import schedulesIcon from "@iconify-icons/bx/bx-grid-alt";
import categoriesIcon from "@iconify-icons/bx/bx-category-alt";
import usersIcon from "@iconify-icons/bx/bx-user";
import eventsIcon from "@iconify-icons/bx/bx-calendar-event";


export const updatedNavbar = (scheduleStore) => {
  const navbar = [];
  
  ensureLogin(scheduleStore, navbar);
  ensureWelcome(scheduleStore, navbar);
  ensureSchedules(scheduleStore, navbar);
  ensureCategories(scheduleStore, navbar);
  ensureUsers(scheduleStore, navbar);
  ensureEvents(scheduleStore, navbar);

  return navbar
};

const ensureLogin = (scheduleStore, navbar) => {
  if (scheduleStore.loggedIn) {return};
  const navbarItem = { route: "#/login", title: "Login", icon: loginIcon };
  navbar.push(navbarItem);
};

const ensureWelcome = (scheduleStore, navbar) => {
  if(!scheduleStore.loggedIn) {return};
  const navbarItem = { route: "#/welcome", title: "Algemeen", icon: welcomeIcon };
  navbar.push(navbarItem);
}

const ensureSchedules = (scheduleStore, navbar) => {
  if(!scheduleStore.loggedIn) {return};
  const navbarItem = { route: "#/schedules", title: "Roosters", icon: schedulesIcon };
  navbar.push(navbarItem);
}

const ensureCategories = (scheduleStore, navbar) => {
  if(!scheduleStore.loggedIn) {return};
  const navbarItem = { route: "#/categories", title: "Categories", icon: categoriesIcon };
  navbar.push(navbarItem);
}

const ensureUsers = (scheduleStore, navbar) => {
  if(!scheduleStore.loggedIn) {return};
  const navbarItem = { route: "#/users", title: "Gebruikers", icon: usersIcon };
  navbar.push(navbarItem);
}

const ensureEvents = (scheduleStore, navbar) => {
  if(!scheduleStore.loggedIn) {return};
  const navbarItem = { route: "#/events", title: "Events", icon: eventsIcon };
  navbar.push(navbarItem);
}