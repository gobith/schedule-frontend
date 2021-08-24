<script lang="ts">
  import { addCategory } from "../../stores/schedule-store";
  let name = "";
  let description = "";
</script>

<h1>Add Category</h1>

<form on:submit|preventDefault={addCategory(name, description)}>
  <label for="name">Naam</label>
  <input name="name" type="text" placeholder="" bind:value={name} />
  <label for="description">Beschrijving</label>
  <textarea name="description" bind:value={description} />

  <button type="submit"> Voeg toe </button>
</form>

<style>
</style>
