<script lang="ts">
  import AddUser from "./AddUser.svelte";
  import ModifyUser from "./ModifyUser.svelte";
  import UserList from "./UserList.svelte";

  export let users;
  export let categories;
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
