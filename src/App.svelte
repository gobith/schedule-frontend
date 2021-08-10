<script lang="ts">
  import scheduleStore from "./stores/schedule-store";
  import Welcome from "./components/welcome/Welcome.svelte";
  import Users from "./components/users/Users.svelte";
  import Login from "./components/login/Login.svelte";
  import Logout from "./components/logout/Logout.svelte";
  import Schedule from "./components/schedule/Schedule.svelte";
</script>

<div>
  {#if $scheduleStore}
    <Login />
    <Logout />
    <Welcome user={$scheduleStore.user} />
    <Users users={$scheduleStore.users} />
    <Schedule users={$scheduleStore.users} events={$scheduleStore.events} />
  {/if}
</div>

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>
