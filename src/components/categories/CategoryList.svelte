<script lang="ts">
  export let categories;
  let selected;

  const updateSelected = (category) => {
    if (selected === category) {
      selected = null;
    } else {
      selected = category;
    }
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
      class:active={selected === category}
      on:click={updateSelected(category)}
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
