<script lang="ts">
  import scheduleStore from "./stores/schedule-store";
  import Welcome from "./components/welcome/Welcome.svelte";
  import Users from "./components/users/Users.svelte";
  import Login from "./components/login/Login.svelte";
  import Logout from "./components/logout/Logout.svelte";
  import ScheduleTable from "./components/schedule/Schedule.svelte";
  import AddCategory from "./components/categories/AddCategory.svelte";
  import Categories from "./components/categories/Categories.svelte";

</script>

{#if $scheduleStore}
  <Login />
  <Logout />
  <Welcome user={$scheduleStore.user} />
  <Categories categories={$scheduleStore.categories} />
  <AddCategory />
  <Users users={$scheduleStore.users} categories={$scheduleStore.categories} />
  <ScheduleTable
    users={$scheduleStore.users}
    events={$scheduleStore.events}
    categories={$scheduleStore.categories}
    user={$scheduleStore.user}
  />
  
{/if}

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>
