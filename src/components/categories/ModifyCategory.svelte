<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { modifyCategory } from "../../stores/schedule-store";
  import { afterUpdate } from "svelte";

  export let categories;
  export let selection;

  const dispatch = createEventDispatcher();

  let id = selection.id;
  let name = selection.name;
  let description = selection.description;

  $: if (id !== selection.id) {
    id = selection.id;
    name = selection.name;
    description = selection.description;
  }

  const modify = () => {
    modifyCategory(id, name, description);
    dispatch("selection", null);
  };
</script>

<h1>Modify Category</h1>

<form on:submit|preventDefault={modify}>
  <label for="name">Naam</label>
  <input name="name" type="text" placeholder="" bind:value={name} />
  <label for="description">Beschrijving</label>
  <textarea name="description" bind:value={description} />

  <button type="submit"> Aanpassen </button>
</form>

<style>
</style>
