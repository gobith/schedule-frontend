<script lang="ts">
  import AddEvent from "./AddEvent.svelte";
  import ModifyEvent from "./ModifyEvent.svelte";
  import EventList from "./EventList.svelte";

  export let events;
  export let categories;
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
</style>
