<script lang="ts">
  import scheduleStore from "../../stores/schedule-store";
  import AddUser from "./AddUser.svelte";
  import ModifyUser from "./ModifyUser.svelte";
  import UserList from "./UserList.svelte";

  let users = $scheduleStore.users;
  let categories = $scheduleStore.categories;
  let selection = null;

  const updateSelection = (event) => {
    selection = event.detail;
  };
</script>

<div>
  <AddUser {categories} />
  <UserList {users} {categories} on:selection={updateSelection} />
  {#if selection}
    <ModifyUser {categories} {selection} on:selection={updateSelection} />
  {/if}
</div>

<style>
</style>
