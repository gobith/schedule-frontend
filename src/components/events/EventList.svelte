<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import EventCategory from "./EventCategory.svelte";

  export let events;
  export let categories;

  let selection;

  const dispatch = createEventDispatcher();

  const updateSelection = (event) => {
    if (selection === event) {
      selection = null;
    } else {
      selection = event;
    }

    dispatch("selection", selection);
  };
</script>

<h1>Events</h1>

<table>
  <tr>
    <th>Datum</th>
    <th>Tijd</th>
    <th>Categorie</th>
    <th>Beschrijving</th>
    <th>Locatie</th>
    <th>Personen</th>
    <th>Status</th>
  </tr>
  {#each events as event}
    <tr
      class="row"
      class:active={selection === event}
      on:click={updateSelection(event)}
    >
      <td>{event.dateString}</td>
      <td>{event.timeString}</td>
      <td><EventCategory {event} {categories} /></td>
      <td>{event.description}</td>
      <td>{event.location}</td>
      <td>{event.nrOfUsers}</td>
      <td>{event.status}</td>
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
