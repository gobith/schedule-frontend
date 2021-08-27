<script lang="ts">
  import { addEvent } from "../../stores/schedule-store";
  import type { Category } from "../../stores/schedule-store";
  import { toDateString, toTimeString } from "../../date-time";

  export let categories: Category[];
  let selectedCategory;
  let description = "";
  let location = "";
  let nrOfUsers;
  let status = "";

  let date = new Date();
  let dateString = toDateString(date);

  let timeString = toTimeString(date);

  const add = () => {
    addEvent(
      dateString,
      timeString,
      selectedCategory.id,
      description,
      location,
      nrOfUsers,
      status
    );
  };
</script>

<h1>Add Event</h1>

<form on:submit|preventDefault={add}>
  <label for="date">Datum</label>
  <input name="date" type="date" bind:value={dateString} required />
  <label for="time">Tijd</label>
  <input name="time" type="time" bind:value={timeString} required />
  <label for="category">Category</label>
  <select name="category" required bind:value={selectedCategory}>
    <option hidden disabled selected value={""}>Selecteer Category</option>
    {#each categories as category}
      <option value={category}>{category.name}</option>
    {/each}
  </select>

  <label for="description">Beschrijving</label>
  <textarea name="description" bind:value={description} />

  <label for="location">Locatie</label>
  <textarea name="location" bind:value={location} />

  <label for="nrOfUsers">Personen</label>
  <input name="nrOfUsers" type="number" bind:value={nrOfUsers} required />

  <label for="status">Status</label>
  <select name="status" required bind:value={status}>
    <option hidden disabled selected value={""}>Selecteer Status</option>
    <option value="open">Open</option>
    <option value="closed">Gesloten</option>
    <option value="finished">Voltooid</option>
    <option value="archived">Gearchiveerd</option>
  </select>

  <button type="submit"> Voeg toe </button>
</form>

<style>
</style>
