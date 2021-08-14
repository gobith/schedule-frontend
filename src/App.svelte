<script lang="ts">
  import scheduleStore from "./stores/schedule-store";
  import Welcome from "./components/welcome/Welcome.svelte";
  import Users from "./components/users/Users.svelte";
  import Login from "./components/login/Login.svelte";
  import Logout from "./components/logout/Logout.svelte";
  import ScheduleGrid from "./components/schedule/Schedule.svelte";
  import ScheduleTable from "./components/schedule-table/Schedule.svelte";
</script>

{#if $scheduleStore}
  <Login />
  <Logout />
  <Welcome user={$scheduleStore.user} />
  <ScheduleTable
    users={$scheduleStore.users}
    events={$scheduleStore.events}
    categories={$scheduleStore.categories}
    user={$scheduleStore.user}
  />
  <Users users={$scheduleStore.users} />
  <ScheduleGrid users={$scheduleStore.users} events={$scheduleStore.events} />
{/if}

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>
