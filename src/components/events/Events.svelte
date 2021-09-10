<script lang="ts">
  import scheduleStore from "../../stores/schedule-store";
  import AddEvent from "./AddEvent.svelte";
  import ModifyEvent from "./ModifyEvent.svelte";
  import EventList from "./EventList.svelte";

  let events = $scheduleStore.events;
  let categories = $scheduleStore.categories;
  let selection = null;

  const updateSelection = (event) => {
    selection = event.detail;
  };
</script>

<div>
  <AddEvent {categories} />
  <EventList {events} {categories} on:selection={updateSelection} />
  {#if selection}
    <ModifyEvent {selection} on:selection={updateSelection} />
  {/if}
</div>

<style>

  div {
    background-color: red;
  }
</style>
