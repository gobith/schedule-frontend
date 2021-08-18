<script lang="ts">

export let categories;

</script>
<h1>Categories</h1>

<table>
    <tr>
      <th>Naam</th>
      <th>Beschrijving</th>
      
    </tr>
    {#each categories as category}
      <tr>
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

</style>