<script lang="ts">
  import IconifyIcon from "@iconify/svelte";
  import runIcon from "@iconify-icons/bx/bx-run";
  import gridIcon from "@iconify-icons/bx/bx-grid-alt";
  import chevronDownIcon from "@iconify-icons/bx/bx-chevron-down";
  import menuIcon from "@iconify-icons/bx/bx-menu";

  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import { push } from "svelte-spa-router";

  import scheduleStore from "./stores/schedule-store";
  import Welcome from "./components/welcome/Welcome.svelte";

  import Login from "./components/login/Login.svelte";
  import Logout from "./components/logout/Logout.svelte";

  import Categories from "./components/categories/Categories.svelte";

  import Events from "./components/events/Events.svelte";

  import Users from "./components/users/Users.svelte";

  import Schedule from "./components/schedule/Schedule.svelte";
  import CategoryList from "./components/categories/CategoryList.svelte";

  let closeSidebar = true;

  const arrowClick = (event) => {
    let arrowParent = event.target.parentElement.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  };

  const sidebarClick = (event) => {
    console.log(event);
    closeSidebar = !closeSidebar;
  };
  const isLoggedIn = () => {
    if ($scheduleStore) {
      return $scheduleStore.loggedIn;
    } else {
      return false;
    }
  };

  const routes = {
    "/welcome": wrap({
      component: Welcome,
      props: {},
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
    "/schedules": wrap({
      component: Schedule,
      props: {},
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
    "/users": wrap({
      component: Users,
      props: {},
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
    "/categories": wrap({
      component: Categories,
      props: {},
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
    "/events": wrap({
      component: Events,
      props: {},
      conditions: [
        () => {
          return isLoggedIn();
        },
      ],
    }),
  };
</script>

<!-- <ul>
  <li>
    <a href="/">Home</a>
    <a href="#/welcome">Welcome</a>
    <a href="#/schedules">Roosters</a>
    <a href="#/users">Users</a>
    <a href="#/categories">Categories</a>
    <a href="#/events">Events</a>
  </li>
</ul> -->

<div class="sidebar" class:close={closeSidebar}>
  <div class="logo-details">
    <i><IconifyIcon icon={runIcon} /></i>
    <span class="logo_name">AC Waterland</span>
  </div>
  <ul class="nav-links">
    <li>
      <a href="#/welcome">
        <i><IconifyIcon icon={gridIcon} /></i>
        <span class="link_name">Welcome</span>
      </a>
      <ul class="sub-menu blank">
        <li>
          <a href="#/welcome" class="link_name">Welcome</a>
        </li>
      </ul>
    </li>
    <li>
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
    </li>
  </ul>
</div>
<section class="home-section">
  <div class="home-content">
    <i class="bx-menu" on:click={sidebarClick}
      ><IconifyIcon icon={menuIcon} /></i
    >
    <span class="text">Drop Down Sidebar</span>
  </div>
</section>

<Router {routes} />

<!-- {#if $scheduleStore}
  {#if $scheduleStore.loggedIn}
    <Logout />
    <hr />
    <Welcome {...$scheduleStore} />
    <hr />
    <Schedule {...$scheduleStore} />
    {#if $scheduleStore.isAdmin}
      <hr />
      <Categories {...$scheduleStore} />
      <hr />
      <Events {...$scheduleStore} />
      <hr />
      <Users {...$scheduleStore} />
    {/if}
  {:else}
    <Login />
  {/if}
{/if} -->
<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

  :global(* body) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    background: #11101d;
    z-index: 100;
    transition: all 0.5s ease;
  }

  .sidebar.close {
    width: 78px;
  }

  .sidebar .logo-details {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .sidebar .logo-details i {
    font-size: 30px;
    color: #fff;
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }

  .sidebar .logo-details .logo_name {
    font-size: 22px;
    color: #fff;
    font-weight: 600;
    transition: 0.3s ease;
    transition-delay: 0.1s;
    white-space: nowrap;
  }

  .sidebar.close .logo-details .logo_name {
    transition-delay: 0s;
    opacity: 0;
    pointer-events: none;
  }

  .sidebar .nav-links {
    height: 100%;
    padding: 0px;
    padding-top: 30px 0 150px 0;
    overflow: auto;
  }

  .sidebar.close .nav-links {
    overflow: visible

  }

  .sidebar .nav-links::-webkit-scrollbar {
    display: none;
  }

  .sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
  }

  .sidebar .nav-links li:hover {
    background: #1d1b31;
  }

  .sidebar .nav-links li .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sidebar.close .nav-links li .icon-link {
    display: block;
  }
  .sidebar .nav-links li i {
    display: inline-block;
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .sidebar .nav-links li.showMenu i.arrow {
    transform: rotate(180deg);
  }

  .sidebar.close .nav-links i.arrow {
    display: none;
  }

  .sidebar .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .sidebar .nav-links li a .link_name {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }

  .sidebar.close .nav-links li a .link_name {
    opacity: 0;
    pointer-events: none;
  }

  .sidebar .nav-links li .sub-menu {
    padding: 6px 6px 14px 80px;
    margin-top: -10px;
    background: #1d1b31;
    display: none;
  }

  .sidebar .nav-links li.showMenu .sub-menu {
    display: block;
  }

  .sidebar .nav-links li .sub-menu a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  .sidebar .nav-links li .sub-menu a:hover {
    opacity: 1;
  }

  .sidebar.close .nav-links li .sub-menu {
    position: absolute;
    left: 100%;
    top: -10px;
    margin-top: 0;
    padding: 10px 20px;
    border-radius: 0 6px 6px 0;
    opacity: 0;
    display: block;
    pointer-events: none;
    transition: 0s;
  }

  .sidebar.close .nav-links li:hover .sub-menu {
    top: 0;
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
  }
  .sidebar .nav-links li .sub-menu .link_name {
    display: none;
  }

  .sidebar.close .nav-links li .sub-menu .link_name {
    display: none;
  }

  .sidebar.close .nav-links li .sub-menu .link_name {
    font-size: 18px;
    opacity: 1;
    display: block;
  }

  .sidebar .nav-links li .sub-menu.blank {
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px;
    opacity: 0;
    pointer-events: none;
    
  }

  .sidebar .nav-links li:hover .sub-menu.blank {
    top: 50%;
    transform: translateY(-50%);
  }

  .home-section {
    position: relative;
    background: #e4e9f7;
    height: 100vh;
    left: 260px;
    width: calc(100% - 260px);
    transition: all 0.5s ease;
  }

  .sidebar.close ~ .home-section {
    left: 78px;
    width: calc(100% - 78px);
  }

  .home-section .home-content {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .home-section .home-content .bx-menu,
  .home-section .home-content .text {
    color: #11101d;
    font-size: 35px;
  }

  .home-section .home-content .bx-menu {
    margin: 0 15px;
    cursor: pointer;
  }

  .home-section .home-content .text {
    font-size: 26px;
    font-weight: 600;
  }
</style>
