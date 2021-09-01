<script lang="ts">
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

<ul>
  <li>
    <a href="/">Home</a>
    <a href="#/welcome">Welcome</a>
    <a href="#/schedules">Roosters</a>
    <a href="#/users">Users</a>
    <a href="#/categories">Categories</a>
    <a href="#/events">Events</a>
  </li>
</ul>

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
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>
