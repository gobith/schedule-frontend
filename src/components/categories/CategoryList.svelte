<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let categories;
  let selection;

  const dispatch = createEventDispatcher();

  const updateSelection = (category) => {
    if (selection === category) {
      selection = null;
    } else {
      selection = category;
    }

    dispatch("selection", selection);
  };
</script>

<h1>Categories</h1>

<table>
  <tr>
    <th>Naam</th>
    <th>Beschrijving</th>
  </tr>
  {#each categories as category}
    <tr
      class="row"
      class:active={selection === category}
      on:click={updateSelection(category)}
    >
      <td>{category.name}</td>
      <td>{category.description}</td>
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
