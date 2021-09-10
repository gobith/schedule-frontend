import { wrap } from "svelte-spa-router/wrap";
import Welcome from "./components/welcome/Welcome.svelte";
import welcomeIcon from "@iconify-icons/bx/bx-calendar-check";

import Login from "./components/login/Login.svelte";
import loginIcon from "@iconify-icons/bx/bx-log-in-circle";

export const updatedRoutes = (scheduleStore) => {
  const navbar = [];
  const routes = {};

  ensureLogin(scheduleStore, navbar, routes);
  ensureWelcome(scheduleStore, navbar, routes);

  return {navbar , routes};
};

const ensureLogin = (scheduleStore, navbar, routes) => {
  if (scheduleStore.loggedIn) {
    return;
  }

  const route = "#/login";
  const navbarItem = { route, title: "Login", icon: loginIcon };
  const routeWrap = wrap({
    component: Login,
  });

  navbar.push(navbarItem);
  routes[route] = routeWrap;
};

const ensureWelcome = (scheduleStore, navbar, routes) => {
  if(!scheduleStore.loggedIn) {return};
  console.log("LOGGED IN")
}

/* return [
  {
    route: "#/welcome",
    component: Welcome,
    title: "Algemeen",
    icon: welcomeIcon,
  },
]; */

/* const routes = {
  "/welcome": wrap({
    component: Welcome,
    props: {},
    conditions: [
      () => {
        return loggedIn;
      },
    ],
  }),
  "/schedules": wrap({
    component: Schedule,
    props: {},
    conditions: [
      () => {
        return loggedIn;
      },
    ],
  }),
  "/users": wrap({
    component: Users,
    props: {},
    conditions: [
      () => {
        return loggedIn;
      },
    ],
  }),
  "/categories": wrap({
    component: Categories,
    props: {},
    conditions: [
      () => {
        return loggedIn;
      },
    ],
  }),
  "/events": wrap({
    component: Events,
    props: {},
    conditions: [
      () => {
        return loggedIn;
      },
    ],
  }),
}; */
