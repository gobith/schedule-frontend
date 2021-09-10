<script lang="ts">
  import "./scss/index.scss";

  import { updatedNavbar } from "./navbar";

  import { fade } from 'svelte/transition';

  import IconifyIcon from "@iconify/svelte";
  import runIcon from "@iconify-icons/bx/bx-run";
  import gridIcon from "@iconify-icons/bx/bx-grid-alt";
  import chevronDownIcon from "@iconify-icons/bx/bx-chevron-down";
  import menuIcon from "@iconify-icons/bx/bx-menu";

  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import { push } from "svelte-spa-router";

  import scheduleStore from "./stores/schedule-store";

  import NavBarItem from "./components/navbar/NavBarItem.svelte";

  import Welcome from "./components/welcome/Welcome.svelte";

  import Login from "./components/login/Login.svelte";
  import Logout from "./components/logout/Logout.svelte";

  import Categories from "./components/categories/Categories.svelte";

  import Events from "./components/events/Events.svelte";

  import Users from "./components/users/Users.svelte";

  import Schedule from "./components/schedule/Schedule.svelte";

  const isLoggedIn = () => loggedIn;

  const routes = {
    "/login": wrap({
      component: Login,
      props: {},
      userData: { name: "Inloggen" },
      conditions: [
        () => {
          return !isLoggedIn();
        },
      ],
    }),
    "/welcome": wrap({
      component: Welcome,
      props: {},
      userData: { name: "Algemeen" },
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
    "/schedules": wrap({
      component: Schedule,
      props: {},
      userData: { name: "Rooster" },
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
    "/users": wrap({
      component: Users,
      props: {},
      userData: { name: "Gebruikers" },
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
    "/categories": wrap({
      component: Categories,
      props: {},
      userData: { name: "Categories" },
      conditions: [isLoggedIn],
    }),
    "/events": wrap({
      component: Events,
      props: {},
      userData: { name: "Events" },
      conditions: [
        () => {
          return loggedIn;
        },
      ],
    }),
  };

  $: navbar = [];
  $: loggedIn = false;
  $: componentTitle = "";

  let closeSidebar = true;

  const routeLoaded = (event) => {
    console.log("routeLoading event");
    console.log("Route", event.detail.route);
    console.log("Location", event.detail.location);
    console.log("Querystring", event.detail.querystring);
    console.log("User data", event.detail.userData);

    componentTitle = event.detail.userData.name;
  };

  const routeLoading = (event) => {
    console.log("routeLoaded event");
    // The first 5 properties are the same as for the routeLoading event
    console.log("Route", event.detail.route);
    console.log("Location", event.detail.location);
    console.log("Querystring", event.detail.querystring);
    console.log("Params", event.detail.params);
    console.log("User data", event.detail.userData);
    // The last two properties are unique to routeLoaded
    console.log("Component", event.detail.component); // This is a Svelte component, so a function
    console.log("Name", event.detail.name);
  };

  const arrowClick = (event) => {
    let arrowParent = event.target.parentElement.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  };

  const sidebarClick = (event) => {
    console.log(event);
    closeSidebar = !closeSidebar;
  };

  scheduleStore.subscribe((scheduleObject) => {
    if (!scheduleObject) {
      return;
    }
    loggedIn = scheduleObject.loggedIn;
    navbar = updatedNavbar(scheduleObject);
    if (!loggedIn) {
      push("#/login");
    } else {
      push("#/welcome");
    }
  });
</script>

<div class="sidebar" class:close={closeSidebar}>
  <div class="logo-details">
    <i><IconifyIcon icon={runIcon} /></i>
    <span class="logo_name">AC Waterland</span>
  </div>
  <ul class="nav-links">
    {#each navbar as navbarItem}
    <div in:fade="{{ duration: 300 }}">
 <NavBarItem {navbarItem} />
    </div>
     
    {/each}

   <!--  <li>
      <div class="icon-link">
        <a href="#/schedules">
          <i><IconifyIcon icon={gridIcon} /></i>
          <span class="link_name">Rooster</span>
        </a>
        <i class="arrow" on:click={arrowClick}
          ><IconifyIcon icon={chevronDownIcon} /></i
        >
      </div>
      <ul class="sub-menu">
        <li>
          <a class="link_name" href="#">Rooster</a>
        </li>
        <li>
          <a href="#">Oud Papier</a>
        </li>
        <li>
          <a href="#">Schoonmaak</a>
        </li>
        <li>
          <a href="#">Bar Dienst</a>
        </li>
      </ul>
    </li> -->

    {#if loggedIn}
    <div in:fade="{{ duration: 300 }}">
      <Logout />
      </div>
    {/if}
  </ul>
</div>
<section class="home-section">
  <div class="home-content">
    <i class="bx-menu" on:click={sidebarClick}
      ><IconifyIcon icon={menuIcon} /></i
    >
    <span class="text">{componentTitle}</span>
  </div>
  <div class="home-body">
    <Router
      {routes}
      on:routeLoading={routeLoading}
      on:routeLoaded={routeLoaded}
    />
  </div>
</section>

<style>
</style>
