<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { modifyEvent } from "../../stores/schedule-store";
  import { toDateString, toTimeString } from "../../date-time";
  export let selection;

  let id = selection.id;
  let dateString = toDateString(selection.dateAndTime);
  let timeString = selection.timeString;
  let description = selection.description;
  let location = selection.location;
  let nrOfUsers = selection.nrOfUsers;
  let status = selection.status;

  $: if (id !== selection.id) {
    id = selection.id;
    dateString = toDateString(selection.dateAndTime);
    timeString = selection.timeString;
    description = selection.description;
    location = selection.location;
    nrOfUsers = selection.nrOfUsers;
    status = selection.status;
  }

  const dispatch = createEventDispatcher();

  const modify = () => {
    modifyEvent(
      id,
      dateString,
      timeString,
      description,
      location,
      nrOfUsers,
      status
    );
    dispatch("selection", null);
  };
</script>

<h1>Modify Event</h1>

<form on:submit|preventDefault={modify}>
  <label for="date">Datum</label>
  <input name="date" type="date" bind:value={dateString} required />
  <label for="time">Tijd</label>
  <input name="time" type="time" bind:value={timeString} required />
  <label for="category">Category</label>

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

  <button type="submit"> Aanpassen </button>
</form>

<style>
</style>
