<script lang="ts">
  import { addCategory } from "../../stores/schedule-store";
  import type { Category } from "../../stores/schedule-store";

  export let categories: Category[];

  let name = "";
  let description = "";

  const add = () => {
    addCategory(name, description);
  };
</script>

<h1>Add Category</h1>

<form on:submit|preventDefault={add}>
  <label for="name">Naam</label>
  <input name="name" type="text" placeholder="" bind:value={name} />
  <label for="description">Beschrijving</label>
  <textarea name="description" bind:value={description} />

  <button type="submit"> Voeg toe </button>
</form>

<style>
</style>
