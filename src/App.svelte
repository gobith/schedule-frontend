<script lang="ts">
  import scheduleStore from "./stores/schedule-store";
  import Welcome from "./components/welcome/Welcome.svelte";

  import Login from "./components/login/Login.svelte";
  import Logout from "./components/logout/Logout.svelte";

  import Categories from "./components/categories/Categories.svelte";

  import Events from "./components/events/Events.svelte";

  import Users from "./components/users/Users.svelte";

  import Schedule from "./components/schedule/Schedule.svelte";
</script>

{#if $scheduleStore}
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
{/if}

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>
