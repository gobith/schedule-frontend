<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import CategoryStatus from "./CategoryStatus.svelte";
  export let users;
  export let categories;

  let selection;

  const dispatch = createEventDispatcher();

  const updateSelection = (user) => {
    if (selection === user) {
      selection = null;
    } else {
      selection = user;
    }
    dispatch("selection", selection);
  };
</script>

<h1>Users</h1>

<table>
  <tr>
    <th>Naam</th>
    <th>Achternaam</th>
    <th>Email</th>
    <th>Telefoon</th>
    <th>Rol</th>
    <th>Website Rol</th>
    {#each categories as category}
      <th>{category.name}</th>
    {/each}
  </tr>
  {#each users as user}
    <tr
      class="row"
      class:active={selection === user}
      on:click={updateSelection(user)}
    >
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.role}</td>
      <td>{user.websiteRole}</td>
      {#each categories as category}
        <th><CategoryStatus {user} {category} /></th>
      {/each}
    </tr>
  {/each}
</table>

<style>
  table {
    font-size: 12px;
    border-collapse: collapse;
    position: relative;
  }

  table,
  th,
  td {
    border: 1px solid #63666a;
    font-weight: normal;
    padding: 4px;
  }

  .row:hover {
    background-color: lightblue;
    cursor: pointer;
  }

  .active {
    background-color: lightblue;
  }
</style>
